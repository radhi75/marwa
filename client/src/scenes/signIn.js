import React, { useState, useEffect } from "react";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import FromInput from "../components/FormInput";
import axios from "react-native-axios";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Expo from "expo";

import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const signIn = () => {
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      signIn
    </ScrollView>
  );
};

export default signIn;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 250,
    width: 600,
    resizeMode: "cover",
  },
  text: {
    fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#000",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    fontFamily: "Lato-Regular",
  },
});

// 213513789380-4g4i28f9lrf6soppvpqrri94tqoc9n8t.apps.googleusercontent.com

// ios
// 213513789380-vq6hj0529hpbte0k5epr1c72gapq4np2.apps.googleusercontent.com
