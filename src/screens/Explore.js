import React from 'react';
import {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Listings} from '../components/Listings';
import {Map} from '../components/Map';
import {SearchBar} from '../components/SearchBar';
import {SeeMoreListings} from '../components/SeeMoreListings';

const Explore = () => {
  const [displayMap, setDisplayMap] = useState(true);

  return (
    <>
      {displayMap ? (
        <>
          <Map />
          <SearchBar />
          <SeeMoreListings
            showListings={() => {
              setDisplayMap(false);
              console.log('disply');
            }}
          />
        </>
      ) : (
        <Listings
          hideListings={() => {
            setDisplayMap(true);
            console.log('hello');
          }}
        />
      )}
    </>
  );
};

export default Explore;
