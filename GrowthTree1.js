import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ✅ 공용 컴포넌트
import Top_section1 from "./ex)components_seonwoo/Top_section1";
import GrowthText from "./ex)components_seonwoo/GrowthText";
import GrowthStage from "./ex)components_seonwoo/GrowthStage";
import GrowthEmotion from "./ex)components_seonwoo/GrowthEmotion";

// ✅ Tree1 이미지
import TreeImg from "./assets/tree1.svg";

// ✅ Anticipation 아이콘
import AnticipationIcon from "./components_yunseo/assets/AnticipationIcon.svg";

const GrowthTree1 = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Top_section1 title="Growth Dashboard" onBack={() => console.log("뒤로가기")} />

      {/* Current Stage : Tree */}
      <View style={{ marginTop: 10 }}>
        <GrowthText text="Current Stage : Tree" />
      </View>

      {/* Tree1 이미지 (207 고정) */}
      <View style={{ marginTop: 147 }}>
        <TreeImg width={150} height={150} />
      </View>

      <View style={{ marginTop: 102 }}>
        <GrowthStage label="Next Stage : 5/7 days" percentage={71} />
      </View>

      <View style={{ marginTop: 12 }}>
        <GrowthEmotion
          frequent={{ key: "anticipation", label: "Anticipation", Icon: AnticipationIcon }}
          onPressStatics={() => console.log("Statics pressed")}
        />
      </View>
    </SafeAreaView>
  );
};

export default GrowthTree1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181221",
    alignItems: "center",
    paddingTop: 0,
  },
});
