package com.pouark.pkmenus;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import android.app.Activity;

public class MainActivity extends Activity {
  private static final String MENU_URL = "https://menu.pouark.com";
  private static final int REFRESH_MINUTES = 5; // Set to 0 to disable auto-refresh.

  private WebView webView;
  private final Handler handler = new Handler(Looper.getMainLooper());
  private final Runnable refreshRunnable = new Runnable() {
    @Override
    public void run() {
      if (webView != null) {
        webView.reload();
      }
      if (REFRESH_MINUTES > 0) {
        handler.postDelayed(this, REFRESH_MINUTES * 60L * 1000L);
      }
    }
  };

  @SuppressLint("SetJavaScriptEnabled")
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

    webView = findViewById(R.id.webview);
    webView.setWebViewClient(new WebViewClient());
    WebSettings settings = webView.getSettings();
    settings.setJavaScriptEnabled(true);
    settings.setDomStorageEnabled(true);
    settings.setMediaPlaybackRequiresUserGesture(false);
    webView.setKeepScreenOn(true);

    webView.loadUrl(MENU_URL);
    hideSystemUi();
  }

  @Override
  protected void onResume() {
    super.onResume();
    hideSystemUi();
    if (REFRESH_MINUTES > 0) {
      handler.postDelayed(refreshRunnable, REFRESH_MINUTES * 60L * 1000L);
    }
  }

  @Override
  protected void onPause() {
    handler.removeCallbacks(refreshRunnable);
    super.onPause();
  }

  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    if (hasFocus) {
      hideSystemUi();
    }
  }

  private void hideSystemUi() {
    View decorView = getWindow().getDecorView();
    decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_FULLSCREEN
            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
    );
  }
}
