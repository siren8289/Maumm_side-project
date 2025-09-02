// components_yunseo/Emotion.js
import * as React from "react";
import { StyleSheet, Text, View, PixelRatio } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// SVG 모듈을 항상 컴포넌트로 정규화
import JoyIconModule from "./assets/JoyIcon.svg";
import AnticipationIconModule from "./assets/AnticipationIcon.svg";
import AnxietyIconModule from "./assets/AnxietyIcon.svg";
import DepressionIconModule from "./assets/DepressionIcon.svg";
import AngerIconModule from "./assets/AngerIcon.svg";

const asSvg = (m) => (m && m.default ? m.default : m);
const JoyIcon = asSvg(JoyIconModule);
const AnticipationIcon = asSvg(AnticipationIconModule);
const AnxietyIcon = asSvg(AnxietyIconModule);
const DepressionIcon = asSvg(DepressionIconModule);
const AngerIcon = asSvg(AngerIconModule);

// px → RN dp
const px = (v) => v / PixelRatio.get();

// ✅ 예시 이미지 크기 그대로 보이도록 기본 배율 고정
const SCALE = 3;

// 라벨 폭(디자인 기준 px)도 배율 반영해서 넉넉히
const EMOTIONS = [
  { key: "joy",          label: "Joy",          Icon: JoyIcon,          baseW: 25 },
  { key: "anticipation", label: "Anticipation", Icon: AnticipationIcon, baseW: 75 },
  { key: "anxiety",      label: "Anxiety",      Icon: AnxietyIcon,      baseW: 47 },
  { key: "depression",   label: "Depression",   Icon: DepressionIcon,   baseW: 70 },
  { key: "anger",        label: "Anger",        Icon: AngerIcon,        baseW: 40 },
];

const EmotionItem = ({ IconComp, label, textW }) => (
  <View style={styles.center}>
    <IconComp width={px(40 * SCALE)} height={px(40 * SCALE)} style={styles.icon} />
    <View style={{ height: px(24 * SCALE), width: px(textW) }}>
      <Text
        numberOfLines={1}
        style={[
          styles.itemText,
          {
            width: px(textW),
            fontSize: px(14 * SCALE),
            lineHeight: px(21 * SCALE),
            height: px(24 * SCALE),
          },
        ]}
      >
        {label}
      </Text>
    </View>
  </View>
);

const Emotion = () => {
  return (
    <SafeAreaView style={styles.emotion}>
      <View
        style={[
          styles.row,
          {
            width: px(324 * SCALE),  // 예시 캡처: 324px -> 배율 반영
            height: px(68 * SCALE),  // 예시 캡처: 68px  -> 배율 반영
          },
        ]}
      >
        {EMOTIONS.map(({ key, label, Icon, baseW }) => (
          <EmotionItem
            key={key}
            IconComp={Icon}
            label={label}
            textW={Math.round(baseW * SCALE)} // 라벨 폭도 배율 적용
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emotion: { flex: 1, alignItems: "center", justifyContent: "center" },

  // 내부 아이템을 균등 분배해서 예시처럼 배치
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  center: { alignItems: "center", justifyContent: "center" },

  icon: {
    borderRadius: px(100),
    overflow: "hidden",
    marginBottom: px(4 * SCALE),
  },

  itemText: {
    textAlign: "left",
    color: "#f5f5f5",
    fontFamily: "NotoSansKR-Regular",
    letterSpacing: -0.3,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});

export default Emotion;
