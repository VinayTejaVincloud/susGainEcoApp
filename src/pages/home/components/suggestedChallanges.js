import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../theme';
import ChallengeCard from '../../../components/challengeCard/challengeCard';
const {height, width} = Dimensions.get('window');
const Header = () => {
  return <Text style={styles.headerTextStyle}>Suggested Challanges</Text>;
};

const Divider = () => {
  return (
    <>
      <View style={{padding: 7.5}}></View>
    </>
  );
};
const SuggestedChallenge = () => {
  return (
    <>
      <View style={styles.sgstCard}>
        <Text style={styles.headerTextStyle}>Suggested Challanges</Text>
        <FlatList
          data={Array(5).fill(1)}
          ItemSeparatorComponent={Divider}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={() => <ChallengeCard />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sgstCard: {
    flex: 0.63,
    width,
    backgroundColor:COLORS.CARD_BACKGROUND,
    paddingHorizontal:18,
    paddingBottom:10
  },
  headerTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#182118',
    marginVertical:10
  },
});

export default SuggestedChallenge;
