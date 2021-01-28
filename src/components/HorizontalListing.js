import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {AppText} from './Text';
import Icon from 'react-native-vector-icons/Ionicons';

const imageUrl =
  'https://media1.popsugar-assets.com/files/thumbor/RZ0VOks0DNZgV-9vD-5JMvbrp-Q/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/07/15/843/n/1922398/c0b3f850_IMG_1134.jpg';

export const HorizontalListing = () => {
  return (
    <View style={styles.listing}>
      <View />
      <Image source={{uri: imageUrl}} style={styles.listingImage} />
      <View style={styles.listingInfo}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" size={16} color="red" />
          <AppText style={{marginStart: 3, fontSize: 16}}>4.6 (10)</AppText>
        </View>

        <AppText style={styles.listingText}>Private Room</AppText>
        <AppText>Arus Beach Home</AppText>
        <AppText>
          <AppText style={{fontWeight: 'bold'}}>${85}</AppText> / night
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    alignItems: 'center',
    marginBottom: 30,
    width: 400,
    backgroundColor: 'white',
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 20,
  },

  listingInfo: {
    alignItems: 'flex-start',
    // backgroundColor: 'orange',
    width: '100%',
  },

  listingImage: {
    borderRadius: 15,
    height: 30,
    width: 50,
    marginBottom: 10,
  },
  listingText: {
    fontFamily: 'AirbnbCerealApp-Book',
  },
});
