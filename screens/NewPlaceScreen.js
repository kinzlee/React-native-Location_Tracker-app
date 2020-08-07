import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button
} from "react-native";
import useDispatch from "react-redux";
import colors from "../constants/colors";
import * as actionPlaces from "../store/Places_action";

const NewPlaceScreen = ({ navigation }) => {
  const [titleValue, setTitleValue] = useState("");

  const dispatch = useDispatch();
  const titleChangeHandler = () => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(actionPlaces.addPlace(titleValue));
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
        <Button
          title="Save Place"
          color={colors.primaryColor}
          onPress={() => {}}
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
