import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../theme";
const {height, width} = Dimensions.get('window')
const HomeStyles = StyleSheet.create({
    imageContainer:{
        flex:0.4,
        backgroundColor:COLORS.HOME_IMAGE_BACKGROUND,
        width
    },
    contentContainer:{
        flex:0.6,
        display:'flex',
        backgroundColor:COLORS.PAGE_BACKGROUND,
        width
    }
});

export default HomeStyles