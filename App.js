// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import GrowthStageCard from "./components_sj/components/GrowthStageCard";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <GrowthStageCard
          title="Growth Stage"
          stage="Sprout"
          daysDone={9}
          daysTotal={14}
          daysToNext={5}
          onGrow={() => console.log("Grow pressed!")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // 배경 어두운 색
  },
  scroll: {
    padding: 16,
  },
});

export default App;
