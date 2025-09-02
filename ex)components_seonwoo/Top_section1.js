import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackIcon from "../assets/Back.svg"; // react-native-svg-transformer 필요

const Top_section1 = ({ title = "Growth Dashboard", onBack }) => {
  return (
    <View style={styles.container}>
      {/* 뒤로가기 아이콘 */}
      <TouchableOpacity onPress={onBack} style={styles.iconWrapper}>
        <BackIcon width={20} height={20} fill="#ffffff" />
      </TouchableOpacity>

      {/* 타이틀 */}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 10,   // 상하 10px
    paddingHorizontal: 16, // 좌우 16px
  },
  iconWrapper: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 84, // Figma gap 기준
  },
  text: {
    fontSize: 18,
    color: "#ffffff", // ✅ 글자만 흰색
    fontFamily: "NotoSansKR-Regular",
    fontWeight: "500",
    letterSpacing: -0.3,
    lineHeight: 27,
  },
});

export default Top_section1;
