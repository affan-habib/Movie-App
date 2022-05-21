import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image,FlatList } from "react-native";
import { selectApi } from "../reducers/apiSlice";
import { useSelector, useDispatch } from "react-redux";
const Favorites = ({navigation}) => {

  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  const ItemView = ({ item }) => {
    return (
      <View style={styles.movie}>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
        <Text
          style={{ marginTop: 10, color: "#e82f3e", fontSize: 15 }}
          onPress={() => getItem(item)}
        >
          {item.original_title.toUpperCase()}
        </Text>
        <Text>Overall Rating: {item.vote_average}</Text>
        <Text>Year: {item.release_date.slice(0, 4)}</Text>
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
    height: 500,
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
