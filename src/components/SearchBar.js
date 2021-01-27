import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export const SearchBar = () => {
  return (
    <View style={styles.card}>
      <TextInput
        placeholder="Enter text"
        placeholderTextColor="darkgray"
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

    position: 'absolute',
    top: 60,
    width: '86%',
    height: 50,
    marginHorizontal: '7%',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  searchInput: {
    color: 'black',
    fontFamily: 'AirbnbCerealApp-Book',
    fontSize: 17,
    fontWeight: '500',
  },
});
