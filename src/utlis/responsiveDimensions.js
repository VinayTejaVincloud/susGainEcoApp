import { Dimensions } from "react-native"
const  {height, width} = Dimensions.get('window')

export const calculateWidth = (w) => {
    return width*(w/width)
} 

export const calculateHeight = (h) => {
    return height*(h/height)
}