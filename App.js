// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

// ⚠️ 경로는 네 폴더 구조에 맞게 변경
import Emotion from "./components_yunseo/Emotion";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Emotion />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
  },
});
