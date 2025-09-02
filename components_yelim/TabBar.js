// components_yelim/TabBar.js
import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// ✅ SVG 아이콘 (경로는 네 폴더 구조에 맞춰두었어)
import HomeIcon from "./assets/home.svg";
import CalendarIcon from "./assets/list.svg";
import PlusIcon from "./assets/plus.svg";
import StatsIcon from "./assets/statics.svg";
import SettingsIcon from "./assets/settings.svg";

// ------- 커스텀 탭바 UI ------- //
const Color = {
  bg: "#1E1E1E", // 화면 배경(원하면 투명/다크로 조절)
  pill: "#E7E6FF", // 캡슐 바
  accent: "#7D77F6", // 가운데 + 원
  indicator: "#1F1F1F",
};

const TAB_HEIGHT = 64;
const H_PADDING = 24; // 캡슐 내부 좌우 여백
const ICON = 24;
const CENTER_SIZE = 56;

function CustomTabBar({ state, navigation }) {
  const [outerWidth, setOuterWidth] = React.useState(0);
  const innerWidth = Math.max(0, outerWidth - H_PADDING * 2);
  const segment = innerWidth > 0 ? innerWidth / state.routes.length : 0;

  // 활성 인디케이터 이동
  const translateX = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: H_PADDING + segment * state.index + segment / 2,
      duration: 240,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [state.index, segment]);

  const iconMap = {
    Home: (p) => <HomeIcon width={ICON} height={ICON} {...p} />,
    Calendar: (p) => <CalendarIcon width={ICON} height={ICON} {...p} />,
    Create: null, // 중앙 전용
    Stats: (p) => <StatsIcon width={ICON} height={ICON} {...p} />,
    Settings: (p) => <SettingsIcon width={ICON} height={ICON} {...p} />,
  };

  return (
    <SafeAreaView edges={["bottom"]} style={{ backgroundColor: Color.bg }}>
      <View
        style={styles.wrap}
        onLayout={(e) => setOuterWidth(e.nativeEvent.layout.width)}
      >
        {/* 캡슐 배경 */}
        <View style={styles.pill} />

        {/* 탭 아이템들 */}
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            const evt = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !evt.defaultPrevented)
              navigation.navigate(route.name);
          };

          // 중앙 + 버튼
          if (route.name === "Create") {
            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                activeOpacity={0.85}
                style={[
                  styles.centerBtn,
                  { left: H_PADDING + segment * index, width: segment },
                ]}
              >
                <View style={styles.centerCircle}>
                  <PlusIcon
                    width={CENTER_SIZE * 0.42}
                    height={CENTER_SIZE * 0.42}
                  />
                </View>
              </TouchableOpacity>
            );
          }

          const Icon = iconMap[route.name];
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={0.9}
              style={[
                styles.tabItem,
                { left: H_PADDING + segment * index, width: segment },
              ]}
            >
              <Icon />
            </TouchableOpacity>
          );
        })}

        {/* 활성 인디케이터(짧은 바) */}
        {segment > 0 && state.routes[state.index].name !== "Create" && (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.indicator,
              {
                transform: [
                  { translateX },
                  { translateY: TAB_HEIGHT / 2 - 14 },
                ],
              },
            ]}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

// ------- 네비게이터(화면 등록 + 탭바 연결) ------- //
const Tab = createBottomTabNavigator();

const Screen = ({ label }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ fontSize: 24 }}>{label}</Text>
  </View>
);
const HomeScreen = () => <Screen label="Home" />;
const CalendarScreen = () => <Screen label="Calendar" />;
const CreateScreen = () => <Screen label="Create (Center +)" />;
const StatsScreen = () => <Screen label="Stats" />;
const SettingsScreen = () => <Screen label="Settings" />;

function shouldShowTabBar(route) {
  const rn = getFocusedRouteNameFromRoute(route) ?? "";
  const hideOn = ["Detail", "FullScreenModal"];
  return !hideOn.includes(rn);
}

export default function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { display: shouldShowTabBar(route) ? "flex" : "none" },
        })}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ------- 스타일 ------- //
const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    height: TAB_HEIGHT,
    justifyContent: "center",
  },
  pill: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 6 },
      },
      android: { elevation: 8 },
    }),
    backgroundColor: Color.pill,
    borderRadius: 28,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  tabItem: {
    position: "absolute",
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  centerBtn: {
    position: "absolute",
    top: -6, // 살짝 띄우기
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  centerCircle: {
    width: CENTER_SIZE,
    height: CENTER_SIZE,
    borderRadius: CENTER_SIZE / 2,
    backgroundColor: Color.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    position: "absolute",
    width: 20,
    height: 1.5,
    borderRadius: 2,
    backgroundColor: Color.indicator,
    left: 0,
    marginLeft: -10, // 중앙 정렬용 오프셋
  },
});
