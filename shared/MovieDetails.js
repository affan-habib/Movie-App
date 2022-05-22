import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import globalStyles from '../styles/globalStyle'
const MovieDetails = ({ route }) => {
    //avoiding further api call , getting data object as params
  const movie = route.params.item
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={globalStyles.headingOne}
        >
          {movie.original_title}
        </Text>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
        <Text style={globalStyles.paragraph}>Rating: {movie.vote_average}</Text>
        <Text style={globalStyles.paragraph}>Released: {movie.release_date}</Text>
        <Text style={globalStyles.paragraph}>Overview:</Text>
        <Text style={globalStyles.headingThree}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({

  img: {
    width: "100%",
    height: 350,
    marginVertical: 20
  },
 
});

export default MovieDetails;