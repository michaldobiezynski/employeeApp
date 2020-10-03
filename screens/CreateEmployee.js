import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { TextInput, Button } from "react-native-paper";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

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

      console.log(data);
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

      console.log(data);
    }
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
        onPress={() => setModal(true)}>
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
