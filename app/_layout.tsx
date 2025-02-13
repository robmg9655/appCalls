import { SplashScreen, Stack } from "expo-router";

import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Regular": require("@/assets/fonts/NimbusSanL-Reg.ttf"),
    "RegularItalic": require("@/assets/fonts/NimbusSanL-RegIta.ttf"),
    "Bold": require("@/assets/fonts/NimbusSanL-Bol.ttf"),
    "BoldItalic": require("@/assets/fonts/NimbusSanL-BolIta.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }}/>;
}
