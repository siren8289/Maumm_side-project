// ex)components_seonwoo/Settinglist.js
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PointIcon from "../assets/point.svg";

const SettingList = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* 왼쪽 텍스트 */}
      <Text style={styles.text}>{text}</Text>

      {/* 오른쪽 아이콘 */}
      <PointIcon width={8} height={16} />
    </TouchableOpacity>
  );
};

export default SettingList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 356,
    height: 50,
    paddingHorizontal: 14,
    borderRadius: 10, // ✅ radius 10
    backgroundColor: "rgba(238, 238, 255, 0.3)", // #EEEFFF 30%
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#F5F5F5",
    fontFamily: "NotoSansKR_300DemiLight", // expo-font 필요
    lineHeight: 23,
    letterSpacing: -0.2,
  },
});
