import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Card, FAB } from "react-native-paper";

const Home = (props) => {
  const data = [
    { id: 1, name: "Michal", position: "web dev" },
    { id: 2, name: "Bogdan", position: "android dev" },
    { id: 3, name: "Jesse", position: "iOs dev" },
    { id: 4, name: "Walt", position: "Ml dev" },
    { id: 5, name: "Michal", position: "web dev" },
    { id: 6, name: "Bogdan", position: "android dev" },
  ];

  const renderList = (item) => {
    console.log(item.item);
    return (
      <Card
        style={styles.mycard}
        key={item.item.id}
        onPress={() => {
          props.navigation.navigate("Profile");
        }}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 50, borderRadius: 30 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.item.name}</Text>
            <Text style={styles.text}>{item.item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={(item) => {
          return renderList(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => {
          props.navigation.navigate("Create");
        }}
        theme={{ colors: { accent: "#006aff" } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
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
