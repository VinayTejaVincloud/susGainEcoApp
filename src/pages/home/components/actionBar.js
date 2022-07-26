import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {COLORS} from '../../../theme';
import {notificationXml, scanXml} from '../../../assets/svg/scan';
const {width} = Dimensions.get('window')
const UtilityBar = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.notificationContainer, styles.shadowProp]}>
          <SvgXml xml={notificationXml} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.scannerContainer, styles.shadowProp]}>
          <SvgXml xml={scanXml} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    justifyContent: 'space-between',
    flexDirection:'row',
    width,
    padding:16,
    alignItems: 'center',
  },
  notificationContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.CARD_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 8px rgba(63, 63, 80, 0.3)',
  },
  scannerContainer: {
    boxShadow: '0px 4px 8px rgba(63, 63, 80, 0.3)',
    backgroundColor: COLORS.SCAN_BACKGROUND,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  shadowProp:{
    shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    elevation:20
  }
});

export default UtilityBar;
