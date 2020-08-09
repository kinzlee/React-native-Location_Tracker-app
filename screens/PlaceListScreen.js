import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import PlaceItem from "../components/PlaceItem";
import * as actionPlaces from "../store/Places_action";
import { fetchPlaces } from "../helpers/db";

const PlaceListScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="add place"
            iconName="md-add"
            onPress={() => {
              navigation.navigate("NewPlace", { mapPickedLocation: null });
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);
  const dispatch = useDispatch();
  const places = useSelector(state => state.places.places);

  useEffect(() => {
    dispatch(actionPlaces.loadedPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PlaceListScreen;
