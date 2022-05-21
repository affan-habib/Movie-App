import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectApi } from "../reducers/apiSlice";

const SingleMovie = ({ route }) => {
  const { details } = useSelector(selectApi);
  const movie = details.results.find((el) => el.id == route.params.id);
  console.log(movie);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={{
            color: "orange",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {movie.original_title}
        </Text>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
        <Text>Popularity: {movie.popularity}</Text>
        <Text> Rating: {movie.vote_average}</Text>
        <Text>Released: {movie.release_date}</Text>
        <Text>Overview:</Text>
        <Text>{movie.overview}</Text>
      </View>
    </ScrollView>
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

export default SingleMovie;
