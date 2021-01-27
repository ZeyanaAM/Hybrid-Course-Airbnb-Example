import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {AppText} from './Text';

const markers = [
  {id: 1, price: '$10', coordinate: {latitude: 38, longitude: -122.43}},
  {id: 2, price: '$85', coordinate: {latitude: 37.8, longitude: -122.5}},
];

export const Map = () => {
  const renderListingMarker = (marker) => {
    return (
      <Marker coordinate={marker.coordinate} key={marker.id}>
        <View style={styles.cardShadow}>
          <View
            style={{
              width: 50,
              height: 30,
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 20,
            }}>
            <AppText style={{fontSize: 16, fontWeight: '500'}}>
              {marker.price}
            </AppText>
          </View>
        </View>
      </Marker>
    );
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 1.0922,
        longitudeDelta: 1.0421,
      }}>
      {markers.map(renderListingMarker)}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 500,
    width: '100%',
  },
  cardShadow: {
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
