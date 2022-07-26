import React from 'react'
import { Dimensions, StyleSheet, View } from "react-native"
import { COLORS } from "../theme"

const PageBackground = ({children}) => {
    return(
        <>
            <View style={styles.pageContainer}>
                {children}
            </View>
        </>
    )
}

const styles =  StyleSheet.create({
    pageContainer:{
        flex:1,
        backgroundColor: COLORS.PAGE_BACKGROUND
    }
})

export default PageBackground