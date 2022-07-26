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
import PageBackground from "./src/components/PageBackground";
import WelcomeScreen from "./src/components/welcomeScreenIndividual"
import Home from "./src/pages/home/home";

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <View style={styles.mainContainer} >
       <PageBackground>
          <Home/>
       </PageBackground>
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