import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import ChallengeCard from '../../components/challengeCard/challengeCard';
import PageBackground from '../../components/PageBackground';
import UtilityBar from './components/actionBar';
import SuggestedChallenge from './components/suggestedChallanges';
import HomeStyles from './styles';

const Home = () => {
  return (
    <View style={{flex:1}}>
     <View style={HomeStyles.imageContainer}>
        <UtilityBar/>
     </View>
     <View style={HomeStyles.contentContainer}>
       <SuggestedChallenge />
     </View>
    </View>
  );
};

export default Home;
