import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = ({ navigation, route }) => {
  const { placeTitle } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: placeTitle
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>This is the Place Detail screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PlaceDetailScreen;
