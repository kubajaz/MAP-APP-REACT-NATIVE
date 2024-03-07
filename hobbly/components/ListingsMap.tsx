import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { defaultStyles } from '@/constants/Styles';
import { useRouter } from 'expo-router';
import MapView from 'react-native-map-clustering';

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 52,
  longitude: 19,
  latitudeDelta: 9,
  longitudeDelta: 9,
}

const ListingsMap = ({ listings }: Props) => {
  const router = useRouter();

  const onMarkerSelected = (item: any) => {
    router.push(`/listing/${item.id}`);
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        animationEnabled={false}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
      >
        {listings.map((item: any) => (
          <Marker
            key={item.id}
            onPress={() => onMarkerSelected(item)}
            coordinate={{
              latitude: +item.latitude,
              longitude: +item.longitude,
            }} >
            {/* <View style={styles.marker}>
              <Text style={styles.markerText}>
                €
              </Text>
            </View> */}
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
  },
  locateBtn: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});

export default ListingsMap