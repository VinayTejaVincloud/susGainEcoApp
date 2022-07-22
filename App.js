/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import SplashScreen from  "react-native-splash-screen";
import Button from "./src/components/Button";

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <View style={styles.mainContainer} >
      <Text style={styles.mainAppHeading} > susGain Home Screen</Text>
      <Button title={"Welcome"} onPressButton={()=>console.log("Welcome to susGain")} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  mainAppHeading: {
    fontFamily: "Poppins",
    fontSize: 25
  }
})