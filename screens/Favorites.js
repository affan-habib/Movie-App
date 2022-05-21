import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,FlatList, Button } from "react-native";
import { selectApi } from "../reducers/apiSlice";
import { useSelector, useDispatch } from "react-redux";
const Favorites = ({navigation}) => {

  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  const ItemView = ({ item }) => {
    return (
      <View style={styles.movie}>
       <TouchableOpacity
          onPress={() => navigation.navigate("Movie Details", { id: item.id })}
        >
          <Image
            style={styles.img}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{ marginTop: 10, color: "#0296e5", fontSize: 15 }}
        >
          {item.original_title.toUpperCase()}
        </Text>
      </View>
    );
  };
  return (
    
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>
        My Favorite Movies
      </Text>
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
          numColumns={2}
        />
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  img: {
    width: "100%",
    height: 100,
  },
  movie: {
    flex: 1,
    margin: 10,
  },
  flatlist: {
    marginTop: 20,
    padding: 10,
  },
});

export default Favorites;
