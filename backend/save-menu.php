<?php
require __DIR__ . "/config.php";

header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["status" => "error", "message" => "Method not allowed"]);
  exit;
}

$raw = file_get_contents("php://input");
if ($raw === false || $raw === "") {
  http_response_code(400);
  echo json_encode(["status" => "error", "message" => "Empty payload"]);
  exit;
}

$data = json_decode($raw, true);
if (json_last_error() !== JSON_ERROR_NONE) {
  http_response_code(400);
  echo json_encode(["status" => "error", "message" => "Invalid JSON"]);
  exit;
}

$token = "";
if (isset($_SERVER["HTTP_X_WRITE_TOKEN"])) {
  $token = (string)$_SERVER["HTTP_X_WRITE_TOKEN"];
} elseif (is_array($data) && array_key_exists("token", $data)) {
  $token = (string)$data["token"];
}

if ($WRITE_TOKEN !== "" && !hash_equals($WRITE_TOKEN, $token)) {
  http_response_code(401);
  echo json_encode(["status" => "error", "message" => "Unauthorized"]);
  exit;
}

$menu = $data;
if (is_array($data) && array_key_exists("menu", $data) && is_array($data["menu"])) {
  $menu = $data["menu"];
}

function normalize_menu($menu) {
  if (!is_array($menu) || count($menu) === 0) return null;
  $clean = [];
  foreach ($menu as $item) {
    if (!is_array($item)) return null;
    $day = array_key_exists("day", $item) ? trim((string)$item["day"]) : "";
    $title = array_key_exists("title", $item) ? trim((string)$item["title"]) : "";
    $image = array_key_exists("image", $item) ? trim((string)$item["image"]) : "";
    if ($day === "" || $title === "") return null;
    $clean[] = ["day" => $day, "title" => $title, "image" => $image];
  }
  return $clean;
}

$clean = normalize_menu($menu);
if ($clean === null) {
  http_response_code(400);
  echo json_encode(["status" => "error", "message" => "Invalid menu format"]);
  exit;
}

$target = $MENU_PATH;
$targetDir = dirname($target);
if (!is_dir($targetDir)) {
  http_response_code(500);
  echo json_encode(["status" => "error", "message" => "Menu path not writable"]);
  exit;
}

if (file_exists($target)) {
  if (!is_writable($target)) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Menu file not writable"]);
    exit;
  }
} elseif (!is_writable($targetDir)) {
  http_response_code(500);
  echo json_encode(["status" => "error", "message" => "Menu path not writable"]);
  exit;
}

$encoded = json_encode($clean, JSON_PRETTY_PRINT);
if ($encoded === false) {
  http_response_code(500);
  echo json_encode(["status" => "error", "message" => "Failed to encode JSON"]);
  exit;
}
$encoded .= "\n";

if (file_put_contents($target, $encoded, LOCK_EX) === false) {
  http_response_code(500);
  echo json_encode(["status" => "error", "message" => "Failed to save menu"]);
  exit;
}

echo json_encode(["status" => "ok", "count" => count($clean)]);
