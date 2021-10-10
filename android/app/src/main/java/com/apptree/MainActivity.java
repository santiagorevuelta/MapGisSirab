package com.apptree;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "appTree";
  }

//     @Override
//     public void onWindowFocusChanged(boolean hasFocus) {
//         super.onWindowFocusChanged(hasFocus);
//         if (hasFocus) {
//             hideSystemUI();
//         }
//     }
//
//     private void hideSystemUI() {
//         View decorView = getWindow().getDecorView();
//         decorView.setSystemUiVisibility(
//                 View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
//                 | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
//                 | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
//                 | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//                 | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
//                 | View.SYSTEM_UI_FLAG_FULLSCREEN);
//     }

}
