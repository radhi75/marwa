import React, { useState, useRef, useEffect } from "react";
import axios from "react-native-axios";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  Touchable,
} from "react-native";
import Carousel from "../components/carousel/carousel";
import data from "../components/carousel/data/data";

const { height, width } = Dimensions.get("window");

const home = () => {
  // console.log("data", data);
  return (
    <View style={styles.header}>
      Home
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: "#fff8eb",
  },
  imageFooter: {
    height: 30,
    width,
  },
  backgroundLogo: {
    backgroundColor: "transparent",
  },
  facebookLogo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  instagramLogo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  twitterLogo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  carrefourLogo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  logoStyle: {
    flexDirection: "row",
    alignSelf: "center",
  },
  titleCatalogues: {
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
  },
  catalogueBigContainer: {
    width,
    height: 770,
  },
  catalogueContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  catalogueImage: {
    height: 300,
    width: 200,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});

const catalogueText = StyleSheet.create({
  titleLaMarsa: {
    fontWeight: "bold",
    fontSize: 16,
    color: "blue",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  descriptionLaMarsa: {
    fontSize: 12,
    color: "blue",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  titleExpress: {
    fontWeight: "bold",
    fontSize: 16,
    color: "green",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  descriptionExpress: {
    fontSize: 12,
    color: "green",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  titleMarket: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  descriptionMarket: {
    fontSize: 12,
    color: "red",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  titleGabes: {
    fontWeight: "bold",
    fontSize: 16,
    color: "blue",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  descriptionGabes: {
    fontSize: 12,
    color: "blue",
    fontFamily: "Kufam-SemiBoldItalic",
  },
  imageAndText: {
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default home;
