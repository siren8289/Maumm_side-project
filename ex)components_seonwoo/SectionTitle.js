import React from "react";
import { Text, StyleSheet } from "react-native";

const SectionTitle = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default SectionTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "#F5F5F5",             // Figma 색상
    fontFamily: "NotoSansKR-Medium", // expo-font 로드 필요
    lineHeight: 26,               // 18 * 1.42
    letterSpacing: -0.2,          // -1.1% 정도 반영
    marginVertical: 12,
    textAlign: "left",
  },
});
