import React, { useState, useCallback } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };
  const selectLocationHandler = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  const savePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    navigation.navigate("NewPlace", { mapPickedLocation: selectedLocation });
  }, [selectedLocation]);

  let markerCoordinate;

  if (selectedLocation) {
    markerCoordinate = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => {
            savePickedLocation();
          }}
        >
          <Text style={styles.headerText}>Save</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation, savePickedLocation]);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinate && (
        <Marker title="picked location" coordinate={markerCoordinate}></Marker>
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    flex: 1
  },
  headerBtn: {
    marginHorizontal: 20
  },
  headerText: {
    fontSize: 16,
    color: "#fff"
  }
});

export default MapScreen;
