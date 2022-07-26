import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../../theme';
import React from 'react';
import Demo from '../../../assets/android/Demo.png';
import {
  calculateHeight,
  calculateWidth,
} from '../../utlis/responsiveDimensions';
import Content from './content';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
const ChallengeCard = () => {
  return (
    <>
      <ImageBackground
        style={styles.cardContainer}
        imageStyle={styles.imageStyle}
        source={Demo}>
        <View style={styles.badgeWrapper}>
          <LinearGradient
            colors={[
              'rgba(6, 6, 6, 0.85)',
              'rgba(65, 65, 65, 0.1)',
            ]}
            locations={[0.30,0.8168]}
            useAngle={true}
            angle={211}
            angleCenter={{x:0.5, y:0.5}}
            style={[styles.badgeContainer]}>
            <Text style={styles.noActivities}># activities</Text>
          </LinearGradient>
        </View>
        <Content />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    width: calculateWidth(200),
    height: calculateHeight(230),
    borderRadius: 12,
    flex: 1,
    overflow: 'hidden',
  },
  badgeWrapper:{
    flex: 0.3,
    justifyContent:'flex-start',
    alignItems:'flex-end'
  },
  badgeContainer: {
    height:calculateHeight(45),
    width:calculateWidth(96),
    paddingVertical:16,
    paddingLeft:20,
    paddingRight:12,
    borderBottomLeftRadius: calculateWidth(70)
  },
  noActivities:{
    fontFamily:'Poppins-Regular',
    fontSize:11,
    fontWeight:'600',
    fontStyle:'normal',
    color:'#FFFFFF'
  },
  imageStyle: {
    borderRadius: 12,
  },
});

export default ChallengeCard;
