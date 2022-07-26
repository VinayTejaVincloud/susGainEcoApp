import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import welcomeJpg from './../../assets/android/welcomeScreen.jpg'
import {text1, text2, text3, text4} from './WelcomeScreenIndividual.const'

const WelcomeScreenIndividual = () => {
    return (
        <View style={styles.container1} >
            <ImageBackground style={styles.image} source={welcomeJpg} resizeMode="cover" blurRadius={5}>
                <View style={styles.container2}>
                    <Text style={styles.text1}>{text1}</Text>
                    <Text style={styles.text2}>{text2}</Text>
                </View>
                <Text style={styles.text1}>{text3}{"\n"}{text4} </Text>
            </ImageBackground>
        </View>
    )
}

export default WelcomeScreenIndividual

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: "row"
    },
    container2:{
      marginBottom: 10
    },
    image: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0, 0.5)",
      opacity: 0.8,
      backgroundColor: "black"
    },
    text1:{
      fontFamily: "Poppins-Regular",
      fontWeight: "600",
      fontSize: 18,
      lineHeight: 21.6,
      color: "white",
      fontStyle: "normal",
      paddingLeft: 30, 
    },
    text2: {
      fontFamily: "Poppins-Regular",
      fontWeight: "800",
      fontSize: 28,
      lineHeight: 36.4,
      color: "white",
      fontStyle: "normal",
      paddingLeft: 30,
    }
})