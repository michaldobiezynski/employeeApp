import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

const Home = () => {
  const data = [
    { id: 1, name: "Michal", position: "web dev" },
    { id: 2, name: "Bogdan", position: "android dev" },
    { id: 3, name: "Jesse", position: "iOs dev" },
    { id: 4, name: "Walt", position: "Ml dev" },
  ];

  const renderList = data.map((item) => {
    return (
      <Card style={styles.mycard} key={item.id}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 50, borderRadius: 30 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  });
  return <View>{renderList}</View>;
};

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
    flexDirection: "row",
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Home;
