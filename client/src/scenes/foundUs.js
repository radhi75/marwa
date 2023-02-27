import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";

// to get the phone height
const height = Dimensions.get("window").height;
const foundUs = () => {
  //creating hook to change the heme
  return (
    <View>
      found
        </View>

       
  );
};

export default foundUs;

const styles = StyleSheet.create({
  screen: {
    height,
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  themeMapSquare: {
    width: 120,
    height: 120,
    backgroundColor: "#00BCD4",
  },
  containerThemeBox: {
    position: "absolute",
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
  },
});
