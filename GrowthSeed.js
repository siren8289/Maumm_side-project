// screens/GrowthSeed.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ✅ 공용 컴포넌트
import Top_section1 from "./ex)components_seonwoo/Top_section1";
import GrowthText from "./ex)components_seonwoo/GrowthText";
import GrowthStage from "./ex)components_seonwoo/GrowthStage";
import GrowthEmotion from "./ex)components_seonwoo/GrowthEmotion";

// ✅ Seed 이미지 (SVG)
import SeedImg from "./assets/seed.svg";

// ✅ Anticipation 아이콘
import AnticipationIcon from "./components_yunseo/assets/AnticipationIcon.svg";

const GrowthSeed = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* 상단 영역 */}
      <View style={styles.topSection}>
        <Top_section1
          title="Growth Dashboard"
          onBack={() => console.log("뒤로가기")}
        />
        <GrowthText text="Current Stage : Seed" />
      </View>

      {/* 중앙 아이콘 */}
      <View style={styles.centerWrapper}>
        <SeedImg width={113} height={86} />
      </View>

      {/* 하단 영역 */}
      <View style={styles.bottomSection}>
        <GrowthStage label="Next Stage : 5/7 days" percentage={71} />

        <View style={{ marginTop: 12 }}>
          <GrowthEmotion
            frequent={{
              key: "anticipation",
              label: "Anticipation",
              Icon: AnticipationIcon,
            }}
            onPressStatics={() => console.log("Statics pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GrowthSeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181221", // ✅ Figma 배경색
  },
  topSection: {
    alignItems: "center",
    marginBottom: 20, // 상단바와 텍스트 간격
  },
  centerWrapper: {
    flex: 1, // 남은 공간 전부 차지
    justifyContent: "center", // 세로 중앙
    alignItems: "center", // 가로 중앙
  },
  bottomSection: {
    paddingBottom: 20,
    alignItems: "center",
  },
});
