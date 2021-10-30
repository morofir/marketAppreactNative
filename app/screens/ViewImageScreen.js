import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
export function ViewImageScreen() {
  return (
    <View style={style.container}>
      <View style={style.closeIcon} />
      <View style={style.deleteIcon} />

      <Image
        resizeMode="contain"
        style={style.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const style = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 50,
    left: 40,
    borderRadius: 13,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 50,
    right: 40,
    borderRadius: 13,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
