import React, { useEffect, useState } from "react";
import axios from "react-native-axios";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  StatusBar,
  Animated,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { LinearGradient } from 'expo-linear-gradient';


import Cart from "./myList";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { State } from 'react-native-gesture-handler';

const product = ({ navigation }) => {
  

  return (
    <View>product</View>

  );
};

export default product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  cardText: {
    fontSize: 24,
    alignItems: "center",
    marginLeft: 110,
  },
  Text: {
    fontSize: 24,
    marginLeft: 110,
    color: "#009432",
  },
  card: {
    marginTop: "1%",
    backgroundColor: "#fff",
    marginBottom: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOpacity: 1,
    marginLeft: 10,
  },
  cardImage: {
    width: "80%",
    height: 170,
    resizeMode: "cover",
  },
  btn: {},
});
