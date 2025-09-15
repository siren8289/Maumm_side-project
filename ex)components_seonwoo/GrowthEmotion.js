// ex)components_seonwoo/GrowthEmotion.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// ✅ 아이콘 불러오기
import JoyIconModule from "../components_yunseo/assets/JoyIcon.svg";
import AnticipationIconModule from "../components_yunseo/assets/AnticipationIcon.svg";
import AnxietyIconModule from "../components_yunseo/assets/AnxietyIcon.svg";
import DepressionIconModule from "../components_yunseo/assets/DepressionIcon.svg";
import AngerIconModule from "../components_yunseo/assets/AngerIcon.svg";

// svg 모듈 정규화
const asSvg = (m) => (m && m.default ? m.default : m);
const JoyIcon = asSvg(JoyIconModule);
const AnticipationIcon = asSvg(AnticipationIconModule);
const AnxietyIcon = asSvg(AnxietyIconModule);
const DepressionIcon = asSvg(DepressionIconModule);
const AngerIcon = asSvg(AngerIconModule);

// 감정 리스트 정의 (임시 count 값)
const EMOTIONS = [
  { key: "anger", label: "Anger", Icon: AngerIcon, count: 3 },
  { key: "joy", label: "Joy", Icon: JoyIcon, count: 3 },
  { key: "anticipation", label: "Anticipation", Icon: AnticipationIcon, count: 3 },
  { key: "depression", label: "Depression", Icon: DepressionIcon, count: 3 },
  { key: "anxiety", label: "Anxiety", Icon: AnxietyIcon, count: 3 },
];

const GrowthEmotion = ({
  frequent = { key: "anticipation", label: "Anticipation", Icon: AnticipationIcon },
  onPressStatics,
}) => {
  return (
    <View style={styles.container}>
      {/* ✅ 상단 감정 아이콘 + 카운트 */}
      <View style={styles.emotionsRow}>
        {EMOTIONS.map(({ key, Icon, count }) => (
          <View key={key} style={styles.emotionItem}>
            <Icon width={32} height={32} />
            <Text style={styles.emotionCount}>{count}</Text>
          </View>
        ))}
      </View>

      {/* ✅ 구분선 */}
      <View style={styles.divider} />

      {/* ✅ 오늘 가장 많은 감정 */}
      <View style={styles.frequentRow}>
        <Text style={styles.frequentLabel}>Most frequent emotion today:</Text>
        <frequent.Icon width={20} height={20} style={{ marginLeft: 6, marginRight: 4 }} />
        <Text style={styles.frequentText}>{frequent.label}</Text>
      </View>

      {/* ✅ Statics 버튼 */}
      <TouchableOpacity style={styles.button} onPress={onPressStatics}>
        <Text style={styles.buttonText}>Statics</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GrowthEmotion;

const styles = StyleSheet.create({
  container: {
    width: 356,
    height: 184,
    backgroundColor: "rgba(238, 238, 255, 0.3)", // #EEEFFF, 30% opacity
    borderRadius: 20,
    paddingHorizontal: 16, // 양옆 패딩 16
    paddingTop: 20,        // ✅ 상단 ↔ 이모지 라인 20px
    paddingBottom: 20,     // ✅ 버튼 ↔ 하단 20px
  },
  emotionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10, // ✅ 이모지 라인 ↔ 구분선 10px
  },
  emotionItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  emotionCount: {
    color: "#F5F5F5",
    fontSize: 16,
    marginLeft: 10, // 아이콘 ↔ 숫자 간격
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#767676",
    marginBottom: 13, // ✅ 구분선 ↔ frequent 13px
  },
  frequentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13, // ✅ frequent ↔ 버튼 13px
  },
  frequentLabel: {
    color: "#F5F5F5",
    fontSize: 16,
  },
  frequentText: {
    color: "#F5F5F5",
    fontSize: 14,
    marginLeft: 4,
  },
  button: {
    width: "100%",
    height: 54,
    borderRadius: 50,
    backgroundColor: "#EEEFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#262626",
  },
});
