import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DefaultImg from '../../../assets/android/default_img.png'
const Content = () => {
  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.7)',
            'rgba(0, 0, 0, 1)',
          ]}
          locations={[0, 0.5, 1]}
          style={styles.linearGradient}>
          <View style={styles.textWrapper}>
            <Text style={[styles.poppinsRegular, styles.goalText]}>{`<Goal>`}</Text>
            <Text style={styles.challengeText}>{`<Challenge name >`}</Text>
          </View>
          <View style={styles.footerWrapper}>
            <View style={styles.periodContainer}>
              <Text style={[styles.poppinsRegular, styles.periodText]}>{`Mon, ## - Mon, ##, Year`}</Text>
              <View style={styles.dotStyle}></View>
              <Text style={[styles.poppinsRegular, styles.statusText]}>{`Status`}</Text>
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.pairContainer}>
                <LinearGradient
                  colors={['#0C6009', '#82DD7F']}
                  locations={[0.3, 0.8168]}
                  useAngle={true}
                  angle={160}
                  angleCenter={{x: 0.5, y: 0.5}}
                  style={[styles.badgeContainer]}>
                  <View style={styles.badgeView}>
                    {/* <SvgXml xml={LetterPXml} style={styles.Pstyle} /> */}
                    <Text style={styles.badgeTextStyle}>P</Text>
                  </View>
                </LinearGradient>
                <Text style={[styles.poppinsRegular, styles.ml8]}>###</Text>
              </View>
              <View style={styles.pairContainer}>
                    <Image source={DefaultImg}/>
                    <Text style={[styles.poppinsRegular, styles.ml8]}>{`Rewards`}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  poppinsRegular:{
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 24,
    color:'#FFFFFF'
  },
  goalText: {
    color: '#F2F1F1',
  },
  textWrapper: {
    flex: 0.7,
  },
  footerWrapper: {
    flex: 0.3,
  },
  challengeText: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  periodContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  periodText: {
    color: '#F2F1F1',
  },
  dotStyle: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: '#BDBDBD',
    marginHorizontal: 3,
  },
  statusText: {
    color: '#119D49',
  },
  progressContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    height: 12,
    width: 12,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeView: {
    width: 9,
    height: 9,
    borderRadius: 4,
    display: 'flex',
    backgroundColor: '#19A915',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 7,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    top: -1,
  },
  pairContainer: {
   flexDirection:'row',
   alignItems:'center',
   marginRight:18
  },
  ml8:{
    marginLeft:8
  }
});
export default Content;
