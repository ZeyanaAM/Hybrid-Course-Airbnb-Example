import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Listing} from './Listing';
import {AppText} from './Text';

const places = ['Munnar', 'Hotel', 'Apartment'];

export const SeeMoreListings = ({showListings}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={showListings}
        activeOpacity={0.7}>
        <View
          style={{
            height: 4,
            width: 50,
            backgroundColor: 'lightgrey',
            borderRadius: 5,
          }}
        />
        <AppText style={{textAlign: 'center', fontWeight: '500'}}>
          300+ places to stay
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
