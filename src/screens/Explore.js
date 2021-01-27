import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Listings} from '../components/Listings';
import {Map} from '../components/Map';
import {SearchBar} from '../components/SearchBar';

const Explore = () => {
  return (
    <>
      <Map />
      <SearchBar />
      <Listings />
    </>
  );
};

export default Explore;

const styles = StyleSheet.create({
  cardShadow: {
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
});
