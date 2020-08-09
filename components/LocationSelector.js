import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Alert,
  StyleSheet
} from "react-native";
import colors from "../constants/colors";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapPreview from "../components/MapPreview";

const LocationSelector = ({ navigation, route, onLocationPicked }) => {
  const [isFetching, setIsFetching] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const { mapPickedLocation } = route.params;

  useEffect(() => {
    console.log(mapPickedLocation, "////111111111111111111!!!!");
    if (mapPickedLocation) {
      setPickedLocation(mapPickedLocation);
      onLocationPicked(mapPickedLocation);
    }
  }, [mapPickedLocation, onLocationPicked]);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app",
        [{ text: "okay" }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 10000
      });
      console.log(location);
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.latitude
      });
      onLocationPicked({
        lat: location.coords.latitude,
        lng: location.coords.latitude
      });
    } catch (err) {
      Alert.alert(
        "Could not get location!",
        "Please try again later or pick a location from the map",
        [{ text: "Okay" }]
      );
    }
    setIsFetching(false);
  };

  const pickOnMapHandler = () => {
    navigation.navigate("Maps");
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size="large" color={colors.primaryColor} />
        ) : (
          <Text>No location selected</Text>
        )}
      </MapPreview>
      <View style={styles.action}>
        <Button
          title="Get User Location"
          color={colors.primaryColor}
          onPress={getLocationHandler}
        />

        <Button
          title="Pick on Map"
          color={colors.primaryColor}
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  }
});

export default LocationSelector;
