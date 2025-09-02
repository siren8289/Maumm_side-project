import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 326,        // Figma 기준 W
    height: 56,        // Figma 기준 H
    borderRadius: 50,
    backgroundColor: "#eeeeff", // var(--color-lavender)
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 110,
  },
  text: {
    fontSize: 14,
    color: "#262626", // var(--color-gray)
    fontFamily: "NotoSansKR-Regular",
    letterSpacing: -0.3,
    lineHeight: 21,
  },
});

export default Button;
