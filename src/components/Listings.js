import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Listing} from './Listing';
import {AppText} from './Text';

const places = ['Munnar', 'Hotel', 'Apartment'];

export const Listings = () => {
  return (
    <View style={styles.listings}>
      <FlatList
        data={places}
        renderItem={({item}) => <Listing />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <AppText style={styles.listingsHeader}>
            Explore all 300+ stays
          </AppText>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listings: {
    flex: 1,
    paddingHorizontal: 30,
    // borderRadius: 20,
    // width: '100%',
    // backgroundColor: 'yellow',
  },

  listingsHeader: {
    paddingTop: 20,
    paddingBottom: 30,
    fontWeight: 'bold',
    fontSize: 22,
  },
});
