// ex)components_seonwoo/GrowthText.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GrowthText = ({ text = "Current Stage : Garden" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default GrowthText;

const styles = StyleSheet.create({
  container: {
    width: 356, // 디자인 기준 고정 폭
    backgroundColor: "181221",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#F5F5F5", // ✅ 글자색
    fontSize: 16,     // ✅ 글자 크기
  },
});
