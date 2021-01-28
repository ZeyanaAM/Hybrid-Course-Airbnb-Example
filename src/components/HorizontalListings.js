import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {HorizontalListing} from './HorizontalListing';
import {Listing} from './Listing';
import {AppText} from './Text';

const places = ['Munnar', 'Hotel', 'Apartment'];

export const HorizontalListings = () => {
  return (
    <View style={styles.listings}>
      <FlatList
        data={places}
        renderItem={({item}) => <HorizontalListing />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listings: {
    position: 'absolute',
    height: 100,
    backgroundColor: 'transparent',
    bottom: 200,
  },
});
