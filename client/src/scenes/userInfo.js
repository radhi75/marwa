import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import FormInput from "../components/FormInput";
import { ScrollView } from "react-native-gesture-handler";
import { windowHeight, windowWidth } from "../utils/Dimentions";
import { LinearGradient } from "expo-linear-gradient";
import axios from "react-native-axios";

export default function userInfo({ route, navigation }) {

  return (
    <ScrollView>
     userinfo
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e67e22",
  },

  text: {
    margin: 20,
    padding: 20,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#0984e3",
  },
});

