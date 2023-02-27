import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import SafeAreaView from "react-native-safe-area-view";
import SocialButton from "../components/SocialButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "react-native-axios";

const { height, width } = Dimensions.get("window");

export default function Profile({ navigation }) {


  return (
   <View>profile</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#e6eaf4",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

//  to add cloudinary

/* 



import React, { useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import axios from 'react-native-axios'
export default function Photo(props) {
  const [localUri,setSelectedImage]=useState('')
  const [data,setPhoto]=useState('')

  let openImagePickerAsync = async () => {
    // let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    // if (permissionResult.granted === false) {
    //   alert('Permission to access camera roll is required!');
    //   return;
    // }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });

    let data = {
      "file": pickerResult.uri,
      "upload_preset": "kgiezron",
    }

    fetch("https://api.cloudinary.com/v1_1/dm1xlu8ce/image/upload", {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(async r => {
      let data = await JSON.parse(r)

      setPhoto(data.url);
    }).catch(err => console.log(err))
  };
 
  return (
    <View>
      {console.log(data,'rrrrrr')}
      <Text> Look at our pretty picture! </Text>
      <Button theme={theme} icon="image-area" mode="contained" onPress={() => openImagePickerAsync()}/>
  }
})
*/