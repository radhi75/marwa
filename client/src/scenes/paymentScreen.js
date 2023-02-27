import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import axios from "react-native-axios";
import AppLoading from "expo-app-loading";
import { Button, Icon, Layout, Spinner } from "@ui-kitten/components";
import { windowHeight, windowWidth } from "../utils/Dimentions";

const paymentScreen = ({ navigation }) => {
 
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            marginTop: 50,
          }}
        >
          payment
        </View>
      );

      // show to make payment
    }
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 100 },
  navigation: { flex: 2, backgroundColor: "red" },
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0984e3",
  },
  footer: { flex: 1, backgroundColor: "cyan" },
  load: {

    margin: 30,
    backgroundColor: "#0652DD",

  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: windowHeight / 2,
    width: windowWidth - 20,
    resizeMode: "cover",
  },
});

export default paymentScreen;
