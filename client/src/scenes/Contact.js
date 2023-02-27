import React, { useState } from "react";

import { Image, StyleSheet, Text, View } from "react-native";
import FromInput from "../components/FormInput";
import { Button } from "@ui-kitten/components";
import axios from "react-native-axios";
import TextArea from "../components/TextArea";





const Contact = ({ navigaton }) => {

  return (
   <View>contact</View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: "#f39c12",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    // paddingTop: 50,
  },
  input: {
    fontSize: 25,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    color: "#000",

  },
  btn: {
    marginTop: 20,
    width: 150,
    borderRadius: 30,
    backgroundColor: "#74b9ff",
  },
  input: {
    flex: 1,
    margin: 2,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    backgroundColor: "#3366FF",
    borderRadius: 10,
  },
});
