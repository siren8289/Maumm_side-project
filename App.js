// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SettingsScreen from "./SettingsScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SettingsScreen />
    </SafeAreaProvider>
  );
}
