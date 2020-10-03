import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Card, FAB } from "react-native-paper";

const Home = (props) => {
  const data = [
    {
      id: 1,
      name: "Michal",
      email: "abc@abc.com",
      salary: "$1000",
      phone: "123",
      position: "web dev",
      picture:
        "https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    },
    {
      id: 2,
      name: "Bogdan",
      email: "abc1@abc.com",
      salary: "$2000",
      phone: "1234",
      position: "android dev",
      picture:
        "https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    },
    {
      id: 3,
      name: "Jesse",
      email: "abc2@abc.com",
      salary: "$3000",
      phone: "1235",
      position: "iOs dev",
      picture:
        "https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    },
    {
      id: 4,
      name: "Walt",
      email: "abc3@abc.com",
      salary: "$4000",
      phone: "1236",
      position: "Ml dev",
      picture:
        "https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    },
    {
      id: 5,
      name: "Michal",
      email: "abc4@abc.com",
      salary: "$5000",
      phone: "1237",
      position: "web dev",
      picture:
        "https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    },
    {
      id: 6,
      name: "Bogdan",
      email: "abc5@abc.com",
      salary: "6000",
      phone: "1238",
      position: "android dev",
      picture:
        "https://images.unsplash.com/photo-1552915170-73c2330ae617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    },
  ];

  const renderList = (item) => {
    console.log(item.item);
    return (
      <Card
        style={styles.mycard}
        key={item.item.id}
        onPress={() => {
          props.navigation.navigate("Profile", { item });
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
