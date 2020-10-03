import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Title, Card, Button } from "react-native-paper";

const Profile = () => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#0033ff", "#6bc1ff"]}
        style={{ height: "20%" }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 140 / 2,
            marginTop: -50,
          }}
          source={{
            uri:
              "https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1421&q=80",
          }}
        />
      </View>
      <View style={{ alignItems: "center", margin: 15 }}>
        <Title>Michal</Title>
        <Text style={{ fontSize: 15 }}>Web Develop</Text>
      </View>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#006aff" />
          <Text style={styles.myText}>abc@abc.com</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#006aff" />
          <Text style={styles.myText}>112134123</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
          <Text style={styles.myText}>$100000</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}>
        <Button
          theme={theme}
          icon="account-edit"
          mode="contained"
          onPress={() => console.log("Pressed")}>
          Edit
        </Button>
        <Button
          theme={theme}
          icon="delete"
          mode="contained"
          onPress={() => console.log("Pressed")}>
          Fire employee
        </Button>
      </View>
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
  myCard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  myText: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5,
  },
});

export default Profile;
