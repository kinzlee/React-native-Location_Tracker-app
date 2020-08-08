import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button
} from "react-native";
import { useDispatch } from "react-redux";
import colors from "../constants/colors";
import * as actionPlaces from "../store/Places_action";
import ImagePicker from "../components/ImageSelector";
import LocationPicker from "../components/LocationSelector";

const NewPlaceScreen = ({ navigation }) => {
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();
  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
  };

  const savePlaceHandler = () => {
    dispatch(actionPlaces.addPlace(titleValue, selectedImage));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>This is the New place screen</Text>
        <TextInput
          style={styles.textInput}
          value={titleValue}
          onChangeText={titleChangeHandler}
        />
        <ImagePicker onImage={imageTakenHandler} />
        <LocationPicker />
        <Button
          title="Save Place"
          color={colors.primaryColor}
          onPress={() => {
            savePlaceHandler();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 4,
    paddingHorizontal: 2
  }
});

export default NewPlaceScreen;
