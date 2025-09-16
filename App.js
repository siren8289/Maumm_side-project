// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GrowthSeed from "./GrowthSeed";

export default function App() {
  return (
    <SafeAreaProvider>
      <GrowthSeed />
    </SafeAreaProvider>
  );
}
