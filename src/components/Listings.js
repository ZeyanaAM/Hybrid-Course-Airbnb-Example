import React from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Listing} from './Listing';
import {AppText} from './Text';

const places = ['Munnar', 'Hotel', 'Apartment'];

export const Listings = ({hideListings}) => {
  return (
    <SafeAreaView style={styles.listings}>
      <FlatList
        data={places}
        renderItem={({item}) => <Listing />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <TouchableOpacity onPress={hideListings}>
            <AppText style={styles.listingsHeader}>
              Explore all 300+ stays
            </AppText>
          </TouchableOpacity>
        }
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        onPress={hideListings}
        activeOpacity={0.7}
        style={{
          backgroundColor: 'black',
          width: 90,
          height: 40,
          bottom: 20,
          alignSelf: 'center',
          borderRadius: 20,
          justifyContent: 'center',
        }}>
        <AppText
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Map
        </AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listings: {
    flex: 1,
    marginHorizontal: 30,
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
