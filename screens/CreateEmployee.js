import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { TextInput, Button } from "react-native-paper";
import CryptoJS from "crypto-js";

import env from "../env.json";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [position, setPosition] = useState("");
  const [modal, setModal] = useState(false);

  const submitData = () => {
    fetch("http://861fb3095e37.ngrok.io/send-data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        salary,
        picture,
        position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const pickFromGallery = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (status !== "granted") {
      Alert("Sorry, we need camera roll permissions to make this work!");
    } else {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
      }
    }
  };
  const pickFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      console.log(status);
      Alert("Sorry, we need camera roll permissions to make this work!");
    } else {
      let data = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
      }
    }
  };

  const handleUpload = (image) => {
    let timestamp = ((Date.now() / 1000) | 0).toString();
    let api_key = env.API_KEY;
    let api_secret = env.API_SECRET;
    let cloud = "dbaft85o1";
    let hash_string = "timestamp=" + timestamp + api_secret;
    let signature = CryptoJS.SHA1(hash_string).toString();
    console.log(api_key);
    console.log(api_secret);
    console.log(signature);

    const data = new FormData();
    data.append("file", image);
    data.append("timestamp", timestamp);
    data.append("api_key", api_key);
    data.append("signature", signature);
    data.append("upload_preset", "employeeApp");
    data.append("cloud_name", "dbaft85o1");
    fetch("https://api.cloudinary.com/v1_1/dbaft85o1/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.inputStyle}
        label="Name"
        value={name}
        mode="outlined"
        theme={theme}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Email"
        value={email}
        mode="outlined"
        theme={theme}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Phone"
        value={phone}
        mode="outlined"
        theme={theme}
        keyboardType="number-pad"
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Salary"
        value={salary}
        mode="outlined"
        theme={theme}
        onChangeText={(text) => setSalary(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Position"
        value={position}
        mode="outlined"
        theme={theme}
        onChangeText={(text) => setPosition(text)}
      />
      <Button
        style={styles.inputStyle}
        theme={theme}
        icon="upload"
        mode="contained"
        onPress={() => setModal(true)}>
        Upload Image
      </Button>
      <Button
        style={styles.inputStyle}
        theme={theme}
        icon="content-save"
        mode="contained"
        onPress={() => submitData()}>
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              theme={theme}
              icon="camera"
              mode="contained"
              onPress={() => pickFromCamera()}>
              Camera
            </Button>
            <Button
              theme={theme}
              icon="image-area"
              mode="contained"
              onPress={() => pickFromGallery()}>
              Gallery
            </Button>
          </View>
          <Button theme={theme} onPress={() => setModal(false)}>
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#006aff",
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "white",
  },
});

export default CreateEmployee;
