import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import colors from "../constants/colors";
import * as ImagePicker from "expo-image-picker";

const ImageSelector = props => {
  const takeImageHandler = () => {
    ImagePicker.launchCameraAsync();
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No image selected yet!</Text>
        <Image style={styles.image} />
      </View>
      <Button
        title="Take Image"
        color={colors.primaryColor}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center"
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImageSelector;
