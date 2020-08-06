import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import colors from "../constants/colors";

const headerProp = {
  headerStyle: {
    backgroundColor: colors.primaryColor
  }
};

const Stack = createStackNavigator();

const PlaceNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerProp}>
        <Stack.Screen name="Places" component={PlaceListScreen} />
        <Stack.Screen name="Maps" component={MapScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlaceNavigator;
