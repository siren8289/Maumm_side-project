import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Top_section0 = ({ title = "MAUMM" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,    // 상하 10px
    paddingHorizontal: 162, // 좌우 162px
  },
  text: {
    fontSize: 16,
    color: "#ffffff", // ✅ 글자만 흰색
    fontFamily: "NotoSansKR-Regular",
    fontWeight: "500",
    letterSpacing: -0.3,
    lineHeight: 24,
  },
});

export default Top_section0;
