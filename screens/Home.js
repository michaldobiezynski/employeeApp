import { StyleSheet, Text, View, Image, FlatList, Alert } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Card, FAB } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { MyContext } from "../App";

const Home = (props) => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const { data, loading } = useSelector((state) => state);
  // const dispatch = useDispatch();
  const { state, dispatch } = useContext(MyContext);
  const { data, loading } = state;
  console.log(data);

  const fetchData = () => {
    fetch("http://2fa9b1800672.ngrok.io/")
      .then((res) => res.json())
      .then((results) => {
        // setData(results);
        // setLoading(false);
        dispatch({ type: "ADD_DATA", payload: results });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Something went wrong");
      });
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const renderList = (item) => {
    return (
      <Card
        style={styles.mycard}
        key={item.item._id}
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
        keyExtractor={(item) => `${item._id}`}
        onRefresh={() => {
          return fetchData();
        }}
        refreshing={loading !== undefined ? loading : true}
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
