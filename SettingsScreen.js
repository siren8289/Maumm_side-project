// screens/SettingsScreen.js
import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationIndependentTree } from "@react-navigation/native"; // ✅ 추가

// 공용 컴포넌트 import
import TabBar from "./components_yelim/TabBar";
import Top_section1 from "./ex)components_seonwoo/Top_section1";
import SettingList from "./ex)components_seonwoo/Settinglist";
import SectionTitle from "./ex)components_seonwoo/SectionTitle";
import SettingIcon from "./assets/settingicon.svg";

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scroll}
      >
        {/* ✅ 상단바 + Settings 중앙 정렬 */}
        <View style={styles.topWrapper}>
          <Top_section1 title="" onBack={() => console.log("뒤로가기")} />
          <Text style={styles.topTitle}>Settings</Text>
        </View>

        {/* ✅ 프로필 섹션 */}
        <View style={styles.profileWrapper}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar} />
            <View style={styles.iconWrapper}>
              <SettingIcon width={20} height={20} />
            </View>
          </View>

          <Text style={styles.nickname}>Nickname</Text>

          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => console.log("Logout")}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ App Information */}
        <View style={styles.sectionTitleWrapper}>
          <SectionTitle text="App Information" />
        </View>
        <View style={[styles.settingListWrapper, { marginTop: 15 }]}>
          <SettingList text="App Version" />
        </View>
        <View style={styles.settingListWrapper}>
          <SettingList text="Privacy Policy" />
        </View>
        <View style={styles.settingListWrapper}>
          <SettingList text="Terms of Service" />
        </View>

        {/* ✅ Notifications */}
        <View style={[styles.sectionTitleWrapper, { marginTop: 20 }]}>
          <SectionTitle text="Notifications" />
        </View>
        <View style={styles.settingListWrapper}>
          <SettingList text="Reminder Time" />
        </View>

        {/* ✅ Support */}
        <View style={[styles.sectionTitleWrapper, { marginTop: 20 }]}>
          <SectionTitle text="Support" />
        </View>
        <View style={styles.settingListWrapper}>
          <SettingList text="Announcements" />
        </View>
        <View style={[styles.settingListWrapper, { marginBottom: 17 }]}>
          <SettingList text="F&Q" />
        </View>
      </ScrollView>

      {/* ✅ TabBar를 독립 네비게이션 트리로 감쌈 */}
      <View style={styles.tabBarOverlay}>
        <View style={styles.tabBarBg} />
        <NavigationIndependentTree>
          <TabBar />
        </NavigationIndependentTree>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181221", // 전체 배경
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#181221",
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: "#181221",
    paddingBottom: 120,
  },
  topWrapper: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  topTitle: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
  profileWrapper: {
    alignItems: "center",
    marginTop: 17,
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    position: "relative",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(238,238,255,0.3)",
  },
  iconWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#8B5CF6",
    justifyContent: "center",
    alignItems: "center",
  },
  nickname: {
    fontSize: 22,
    color: "#f5f5f5",
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
  },
  logoutBtn: {
    width: 118,
    height: 42,
    borderRadius: 20,
    backgroundColor: "#EEEEFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  logoutText: {
    fontSize: 14,
    color: "#262626",
    fontWeight: "500",
  },
  sectionTitleWrapper: {
    marginLeft: 16,
  },
  settingListWrapper: {
    marginHorizontal: 17,
    marginTop: 10,
  },
  tabBarOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    justifyContent: "flex-end",
  },
  tabBarBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#181221",
  },
});
