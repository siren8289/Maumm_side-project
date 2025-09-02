import React from "react";
import { View } from "react-native";
import Button from "./ex)components_seonwoo/Button";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#222" }}>
      <Button label="Grow MSprout" onPress={() => alert("Grow My Sprout 클릭!")} />

    </View>
  );
}
