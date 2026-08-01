# ProGuard/R8 configuration for the release build (minifyEnabled true).
#
# Everything native in this app is Capacitor. Capacitor resolves plugin
# classes, their constructors and their methods reflectively at runtime, driven
# by strings that come from the WebView and from assets/capacitor.plugins.json
# (PluginManager does Class.forName on each "classpath" entry; PluginHandle then
# calls getDeclaredConstructor().newInstance() and scans getMethods() for the
# @PluginMethod annotation). R8 cannot see any of those references, so without
# the keeps below the native bridge breaks in release builds only.

# --- Crash report readability -------------------------------------------
# Keep line numbers so Play Console deobfuscates stack traces against
# mapping.txt, and collapse the source file name so it leaks nothing.
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# --- Runtime annotations ------------------------------------------------
# PluginHandle reads @CapacitorPlugin / @NativePlugin off the class and
# @PluginMethod off each method at runtime. Both the attribute and the
# annotation types themselves have to survive.
-keepattributes *Annotation*, RuntimeVisibleAnnotations, RuntimeVisibleParameterAnnotations, AnnotationDefault
-keep @interface com.getcapacitor.annotation.** { *; }
-keep @interface com.getcapacitor.PluginMethod { *; }
-keep @interface com.getcapacitor.NativePlugin { *; }

# --- Capacitor bridge ---------------------------------------------------
# Bridge, MessageHandler, JSObject/JSArray and friends are reached from the
# WebView and from the generated JS shim, not from Java call sites.
-keep class com.getcapacitor.** { *; }
-keep class com.getcapacitor.plugin.** { *; }

# --- Capacitor plugin classes ------------------------------------------
# This app registers no third-party Capacitor plugins (capacitor.plugins.json
# is empty and android/capacitor.settings.gradle includes only
# :capacitor-android), so the only plugins are the four the Bridge registers
# itself: CapacitorCookies, CapacitorHttp, WebView and SystemBars. These rules
# are written against the base classes and annotations rather than those four
# names, so adding a plugin with `npm i @capacitor/<plugin>` stays covered.
-keep public class * extends com.getcapacitor.Plugin { *; }
-keep @com.getcapacitor.annotation.CapacitorPlugin public class * {
    @com.getcapacitor.annotation.PermissionCallback <methods>;
    @com.getcapacitor.annotation.ActivityCallback <methods>;
    @com.getcapacitor.annotation.Permission <methods>;
    @com.getcapacitor.PluginMethod public <methods>;
    public <init>(...);
}
-keep @com.getcapacitor.NativePlugin public class * {
    @com.getcapacitor.PluginMethod public <methods>;
    public <init>(...);
}
# The no-arg constructor PluginHandle instantiates, on every plugin.
-keepclassmembers class * extends com.getcapacitor.Plugin {
    public <init>();
}

# --- WebView -> Java entry points ---------------------------------------
# androidBridge, CapacitorHttpAndroidInterface, CapacitorCookiesAndroidInterface
# and CapacitorSystemBarsAndroidInterface are all addJavascriptInterface
# targets; their @JavascriptInterface methods are called by name from JS.
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# --- Cordova compatibility layer ----------------------------------------
# capacitor-cordova-android-plugins is an empty shell today, but Capacitor
# always links the Cordova framework and loads Cordova plugins by class name.
-keep class org.apache.cordova.** { *; }
-keep public class * extends org.apache.cordova.CordovaPlugin {
    public <methods>;
    public <fields>;
}
-dontwarn org.apache.cordova.**
