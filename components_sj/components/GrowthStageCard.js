import * as React from "react";
import { useState, useMemo, useCallback } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// --디자인 토큰--
const FontFamily = { notoSansKRRegular: "NotoSansKR-Regular" };
const FontSize = { size_14: 14 };
const Color = {
    colorGray: "#262626",
    colorLavender100: "#eeeeff",
    colorMediumslateblue: "#7768ee",
    colorWhitesmoke: "#f5f5f5",
    colorLavender200: "rgba(238, 238, 255, 0.3)",
};
const Padding = { p_16: 16 };
const Border = { br_100: 100 };
// --------------

const OUTER = 110, MID = 80, INNER = 50, CENTER = 20; // 링의 크기
const STAGES = ["Seed", "Sprout", "Tree", "Garden"]; // 단계 이름 목록

const Statics = () => {
  // === 동적 상태 ===
  const [stageIndex, setStageIndex] = useState(0); // 0: Seed
  const [daysDone, setDaysDone] = useState(9);
  const [daysTotal, setDaysTotal] = useState(14);

  const stage = STAGES[stageIndex]; // 현재 단계 문자열
  const ratio = useMemo(() => {
    if (!daysTotal || daysTotal <= 0) return 0;
    return Math.max(0, Math.min(1, daysDone / daysTotal));
  }, [daysDone, daysTotal]);

  const daysToNext = Math.max(0, daysTotal - daysDone); // 다음 단게까지 남은 일 수

  // 스테이지 업 로직 (성장)
  const handleGrow = useCallback(() => {
    if (daysDone + 1 < daysTotal) {
      setDaysDone((d) => d + 1);
      return;
    }
    setDaysDone(0);
    setDaysTotal(14); // 필요 시 스테이지별 기간 변경
    setStageIndex((idx) => Math.min(idx + 1, STAGES.length - 1));
  }, [daysDone, daysTotal]);

 return (
    <SafeAreaView style={styles.viewBg}>
      <View style={styles.view}>
        <View style={styles.cardContainer}>
          <View style={styles.frameParent}>
            {/* 상단: 텍스트 정보 + 링 묶음 */}
            <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
              {/* 좌측 정보 */}
              <View style={styles.growthStageParent}>
                <Text style={[styles.growthStage, styles.stageFlexBox]}>Growth Stage</Text>
                <View style={styles.currentStageSproutParent}>
                  <Text style={[styles.currentStageSprout, styles.sproutTypo]}>
                    Current Stage: <Text style={{ fontFamily: FontFamily.notoSansKRRegular }}>{stage}</Text>
                  </Text>
                  <Text style={[styles.currentStageSprout, styles.sproutTypo]}>
                    Progress:{" "}
                    <Text style={{ fontFamily: FontFamily.notoSansKRRegular }}>
                      {daysDone}/{daysTotal} days
                    </Text>
                  </Text>
                  <Text style={[styles.currentStageSprout, styles.sproutTypo]}>
                    Day to Next stage:{" "}
                    <Text style={{ fontFamily: FontFamily.notoSansKRRegular }}>{daysToNext}</Text>
                  </Text>
                </View>
              </View>

              {/* 우측 링(절대 배치 4중 링) */}
              <View
                style={styles.frameLayout}
                accessible
                accessibilityLabel={`growth rings. progress ${Math.round(ratio * 100)} percent`}
              >
                {/* 바깥 링 110 */}
                <View style={[styles.frameChild, styles.frameBorder]} />
                {/* 중간 링 80 */}
                <View style={[styles.frameItem, styles.frameBorder, { borderColor: Color.colorMediumslateblue }]} />
                {/* 안쪽 링 50 */}
                <View style={[styles.frameInner, styles.frameBorder]} />
                {/* 중앙 링 20 */}
                <View style={[styles.frameView, styles.frameBorder]} />
              </View>
            </View>

            {/* 하단 버튼 */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleGrow}
              activeOpacity={0.85}
              accessibilityRole="button"
              accessibilityLabel="Grow My Sprout"
            >
              <Text style={styles.buttonText}>Grow My Sprout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  cardContainer: {
    width: 358,
    minHeight: 226,
    borderRadius: 20,
    letterSpacing: -0.3,
    backgroundColor: Color.colorLavender200,
    overflow: "hidden",            
    padding: Padding.p_16, 
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inner: { alignSelf: "stretch" },
  frameParent: { gap: 20, alignSelf: "stretch" },
  frameGroupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  stageFlexBox: { 
    textAlign: "left", 
    color: Color.colorWhitesmoke, 
    alignSelf: "stretch" 
},
  sproutTypo: {
    lineHeight: 21,
    letterSpacing: -0.3,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorWhitesmoke,
  },
  frameBorder: {
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: Border.br_100,
    position: "absolute",
    overflow: "hidden",
    borderColor: Color.colorLavender100,
  },
  frameGroup: { 
    justifyContent: "space-between",
    gap: 0, 
    alignItems: "center" 
},
  growthStageParent: { 
    gap: 10, 
    alignItems: "flex-start",
    flex : 1
},
  growthStage: {
    fontSize: 22,
    lineHeight: 33,
    fontFamily: FontFamily.notoSansKRRegular,
    textAlign: "left",
    color: Color.colorWhitesmoke,
    letterSpacing: -0.5,
  },
  currentStageSproutParent: { 
    gap: 6, 
    alignSelf: "stretch" 
},
  currentStageSprout: { 
    textAlign: "left",
    color: Color.colorWhitesmoke, 
    alignSelf: "stretch" 
},
  frameLayout: { 
    height: OUTER, 
    width: OUTER, 
    position: "relative" 
},
  frameChild: { 
    top: 0, 
    left: 0, 
    height: OUTER, 
    width: OUTER 
},
  frameItem: { 
    top: (OUTER - MID) / 2, 
    left: (OUTER - MID) / 2, 
    width: MID, 
    height: MID 
},
  frameInner: { 
    top: (OUTER - INNER) / 2, 
    left: (OUTER - INNER) / 2, 
    width: INNER, 
    height: INNER 
},
  frameView: { 
    top: (OUTER - CENTER) / 2, 
    left: (OUTER - CENTER) / 2, 
    width: CENTER, 
    height: CENTER 
},
  button: {
    borderRadius: Border.br_100 / 2,
    backgroundColor: Color.colorLavender100,
    width: "100%",
    height: 56,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 110,
    paddingVertical: 16
  },
  buttonText: {
    fontSize: 14,
    color: Color.colorGray,
    fontFamily: FontFamily.notoSansKRRegular,
    letterSpacing: -0.3,
    lineHeight: 21,
    alignSelf: "center",
  },
});

export default Statics;