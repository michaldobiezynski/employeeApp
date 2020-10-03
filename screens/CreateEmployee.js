import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

import { TextInput, Button } from "react-native-paper";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

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
              onPress={() => console.log("Pressed camera")}>
              Camera
            </Button>
            <Button
              theme={theme}
              icon="image-area"
              mode="contained"
              onPress={() => console.log("Pressed gallery")}>
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
