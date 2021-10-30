import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/blue.jpg")} />
        <Text>Sell what you don't need!</Text>
      </View>

      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "gray",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
  },
  logo: {
    width: 150,
    height: 150,
  },
  container: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
