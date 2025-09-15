// ex)components_seonwoo/GrowthStage.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GrowthStage = ({ label = "Next Stage : 5/7 days" }) => {
  return (
    <View style={styles.container}>
      {/* ✅ 상단 텍스트 */}
      <View style={styles.topRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.percentage}>71%</Text>
      </View>

      {/* ✅ Progress Bar */}
      <View style={styles.progressBackground}>
        <View style={styles.progressFill} />
      </View>
    </View>
  );
};

export default GrowthStage;

const styles = StyleSheet.create({
  container: {
    width: 356,
    height: 58,
    backgroundColor: "#EEEEFF", // 카드 배경
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: "center",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    color: "#000000",
    fontSize: 12, // ✅ 폰트 12px
  },
  percentage: {
    color: "#000000",
    fontSize: 12, // ✅ 폰트 12px
  },
  progressBackground: {
    width: 324,   // 전체 바 크기
    height: 10,
    borderRadius: 10,
    backgroundColor: "#EEEEFF", // 바탕
  },
  progressFill: {
    width: 121,   // ✅ 채워진 부분 고정 121px
    height: 10,
    borderRadius: 10,
    backgroundColor: "#7768EE", // 보라색
  },
});
