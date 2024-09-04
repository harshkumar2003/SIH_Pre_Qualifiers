import React from "react";
import { Stack } from "expo-router"; // Keep the import from expo-router
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    'inter' :require('./../assets/fonts/inter.ttf')
  })
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/farmer/index" />
      <Stack.Screen name="login/buyer/index" />
    </Stack>
  );
}
