import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button
} from "react-native";
import colors from "../constants/colors";

const NewPlaceScreen = () => {
  const [titleValue, setTitleValue] = useState("");

  const titleChangeHandler = () => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {};

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
