import { SplashScreen, Stack } from "expo-router";
import { View } from "react-native";

import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from "@/lib/global-provider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Regular": require("@/assets/fonts/NimbusSanL-Reg.ttf"),
    "RegularItalic": require("@/assets/fonts/NimbusSanL-RegIta.ttf"),
    "Bold": require("@/assets/fonts/NimbusSanL-Bol.ttf"),
    "BoldItalic": require("@/assets/fonts/NimbusSanL-BolIta.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <GlobalProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </GlobalProvider>
    </View>
  );
}
