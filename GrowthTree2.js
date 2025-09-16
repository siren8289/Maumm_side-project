// screens/GrowthTree2.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Top_section1 from "./ex)components_seonwoo/Top_section1";
import GrowthText from "./ex)components_seonwoo/GrowthText";
import GrowthStage from "./ex)components_seonwoo/GrowthStage";
import GrowthEmotion from "./ex)components_seonwoo/GrowthEmotion";

// ✅ Tree2 이미지
import TreeImg from "./assets/tree2.svg";
import AnticipationIcon from "./components_yunseo/assets/AnticipationIcon.svg";

const GrowthTree2 = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* 상단 영역 */}
      <View style={styles.topSection}>
        <Top_section1
          title="Growth Dashboard"
          onBack={() => console.log("뒤로가기")}
        />
        <GrowthText text="Current Stage : Tree" />
      </View>

      {/* 중앙 아이콘 */}
      <View style={styles.centerWrapper}>
        <TreeImg width={240} height={228} />
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

export default GrowthTree2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181221", // ✅ Figma 배경색
  },
  topSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  centerWrapper: {
    flex: 1, // 상단/하단 사이 공간
    justifyContent: "center", // 세로 중앙
    alignItems: "center", // 가로 중앙
  },
  bottomSection: {
    paddingBottom: 20,
    alignItems: "center",
  },
});
