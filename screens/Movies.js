import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { callApi, selectApi } from "../reducers/apiSlice";
import { addfavorite } from "../reducers/favoriteSlice";
import Button from "../components/Button";
const Movies = ({ navigation }) => {
  const {
    loading,
    details = {
      results: {},
    },
  } = useSelector(selectApi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      callApi({
        operationId: "/",
        output: "details",
      })
    );
  }, [dispatch]);
  // const allmovies = details.results
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
        <Text style={{ marginTop: 10, color: "#0296e5", fontSize: 16 }}>
          {item.original_title.toUpperCase()}
        </Text>
        <Text>Overall Rating: {item.vote_average}</Text>
        <Text>Year: {item.release_date.slice(0, 4)}</Text>
        <Button
          iconName="favorite"
          onPress={() => dispatch(addfavorite(item))}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>
        Best Movie collection
      </Text>
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={details.results}
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
    backgroundColor: "#eff0ed",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 4,
    margin: 5,
  },
  movie: {
    flex: 1,
    margin: 10,
    border: 1,
    borderColor: "#e82f3e",
  },
  flatlist: {
    marginTop: 20,
    padding: 10,
    border: 1,
    borderColor: "#e82f3e",
  },
});

export default Movies;
