const MENU_URL = "../backend/menu.json";
const SAVE_URL = "../backend/save-menu.php";
const WRITE_TOKEN = "";

const DEFAULT_MENU = [
  { day: "Lundi", title: "Tagliatelles aux boulettes", image: "" },
  { day: "Mardi", title: "Fajitas", image: "" },
  { day: "Mercredi", title: "Gnocchis", image: "" },
  { day: "Jeudi", title: "Poisson pane", image: "" },
  { day: "Vendredi", title: "Pizza", image: "" },
  { day: "Samedi", title: "Burgers maison", image: "" },
  { day: "Dimanche", title: "Cuisses de poulet roties", image: "" }
];

const menuList = document.getElementById("menuList");
const statusEl = document.getElementById("status");
const saveBtn = document.getElementById("saveBtn");
const reloadBtn = document.getElementById("reloadBtn");
const todayDateEl = document.getElementById("todayDate");

const state = {
  menu: [],
  dirty: false,
  imageOptions: [],
  imageIndex: []
};

function setStatus(message, type = "info") {
  statusEl.textContent = message;
  statusEl.dataset.type = type === "info" ? "" : type;
}

setStatus("Application chargee...", "info");

function updateDate() {
  if (!todayDateEl) return;
  const now = new Date();
  todayDateEl.textContent = now.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

function normalizeMenu(data) {
  if (!Array.isArray(data) || data.length === 0) return null;
  const cleaned = [];
  for (const item of data) {
    if (!item || typeof item !== "object") return null;
    const day = typeof item.day === "string" ? item.day.trim() : "";
    const title = typeof item.title === "string" ? item.title.trim() : "";
    if (!day || !title) return null;
    const image = typeof item.image === "string" ? item.image.trim() : "";
    cleaned.push({ day, title, image });
  }
  return cleaned;
}

function markDirty() {
  state.dirty = true;
  saveBtn.disabled = false;
}

function clearDirty() {
  state.dirty = false;
  saveBtn.disabled = true;
}

function createInput(type, value) {
  const input = document.createElement(type === "textarea" ? "textarea" : "input");
  if (type !== "textarea") input.type = "text";
  input.value = value;
  return input;
}

async function fetchImage750g(query) {
  if (!query) return [];
  try {
    const searchUrl = `https://www.750g.com/recherche/?q=${encodeURIComponent(query)}`;
    const response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(searchUrl)}`);
    const htmlText = await response.text();
    if (!htmlText) return [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const images = Array.from(doc.querySelectorAll(".card-media-wrapper img"))
      .map(img => img.src)
      .filter(src => src && src.includes("static.750g.com"));
    return [...new Set(images)];
  } catch (e) {
    return [];
  }
}

async function cycleImage(index) {
  const item = state.menu[index];
  if (!item) return;
  const title = item.title;

  if (!state.imageOptions[index] || state.imageOptions[index].length === 0) {
    setStatus("Chargement des photos...", "info");
    const options = await fetchImage750g(title);
    state.imageOptions[index] = options;
    const foundIndex = item.image ? options.indexOf(item.image) : -1;
    state.imageIndex[index] = foundIndex >= 0 ? foundIndex : -1;
    if (!options.length) {
      setStatus("Aucune photo trouvee pour ce plat.", "error");
      return;
    }
  }

  const options = state.imageOptions[index];
  let currentIndex = state.imageIndex[index];
  if (typeof currentIndex !== "number") currentIndex = -1;
  currentIndex = (currentIndex + 1) % options.length;
  state.imageIndex[index] = currentIndex;
  item.image = options[currentIndex];
  markDirty();
  renderMenu();
}

function renderMenu() {
  menuList.innerHTML = "";
  state.menu.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";
    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = item.day;
    header.appendChild(title);

    const titleField = document.createElement("div");
    titleField.className = "field";
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Plat";
    const titleInput = createInput("input", item.title);
    titleInput.addEventListener("input", () => {
      state.menu[index].title = titleInput.value;
      state.menu[index].image = "";
      state.imageOptions[index] = [];
      state.imageIndex[index] = 0;
      markDirty();
    });
    titleInput.addEventListener("blur", async () => {
      if (!state.menu[index].title.trim()) return;
      setStatus("Chargement des photos...", "info");
      const options = await fetchImage750g(state.menu[index].title);
      state.imageOptions[index] = options;
      state.imageIndex[index] = options.length ? 0 : -1;
      state.menu[index].image = options.length ? options[0] : "";
      markDirty();
      renderMenu();
      setStatus(options.length ? "Photo mise a jour." : "Aucune photo trouvee.", options.length ? "success" : "error");
    });
    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);

    const imageWrap = document.createElement("div");
    imageWrap.className = "image-preview";
    if (item.image) {
      imageWrap.style.backgroundImage = `url("${item.image}")`;
    } else {
      imageWrap.classList.add("is-empty");
      imageWrap.textContent = "Aucune photo";
    }
    imageWrap.addEventListener("click", () => {
      cycleImage(index);
    });

    card.appendChild(header);
    card.appendChild(titleField);
    card.appendChild(imageWrap);

    menuList.appendChild(card);
  });
}

async function loadMenu() {
  setStatus("Chargement du menu...", "info");
  try {
    const response = await fetch(`${MENU_URL}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Erreur serveur (${response.status})`);
    const data = await response.json();
    const normalized = normalizeMenu(data);
    if (!normalized) throw new Error("Format JSON invalide");
    state.menu = normalized;
    renderMenu();
    clearDirty();
    setStatus("Menu charge depuis le serveur.", "success");
  } catch (e) {
    state.menu = DEFAULT_MENU.map(item => ({ ...item }));
    renderMenu();
    clearDirty();
    setStatus("Impossible de charger le serveur. Mode local actif.", "error");
  }
}

async function saveMenu() {
  const normalized = normalizeMenu(state.menu);
  if (!normalized) {
    setStatus("Merci de remplir tous les champs Jour + Plat.", "error");
    return;
  }

  setStatus("Sauvegarde en cours...", "info");
  const payload = normalized.map(item => ({
    day: item.day,
    title: item.title,
    image: item.image || ""
  }));

  const headers = { "Content-Type": "application/json" };
  if (WRITE_TOKEN) headers["X-Write-Token"] = WRITE_TOKEN;

  try {
    const response = await fetch(SAVE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });

    let result = null;
    try {
      result = await response.json();
    } catch (e) {
      result = null;
    }

    if (!response.ok || !result || result.status !== "ok") {
      const message = result && result.message ? result.message : "Erreur serveur";
      throw new Error(message);
    }

    clearDirty();
    setStatus(`Sauvegarde ok (${result.count} jours).`, "success");
  } catch (e) {
    setStatus(`Sauvegarde impossible: ${e.message}`, "error");
  }
}

saveBtn.addEventListener("click", saveMenu);
reloadBtn.addEventListener("click", loadMenu);

window.addEventListener("beforeunload", (event) => {
  if (!state.dirty) return;
  event.preventDefault();
  event.returnValue = "";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((reg) => {
        if (reg.scope.includes("/frontend/")) {
          reg.unregister();
        }
      });
    });
    navigator.serviceWorker.register("./sw.js");
  });
}

loadMenu();
updateDate();
