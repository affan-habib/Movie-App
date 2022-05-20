import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { selectApi } from "../reducers/apiSlice";

const Reviews = ({navigation}) => {

  const { details } = useSelector(selectApi)
  const movie = details.results.find(el=> el.id == '752623' )
  console.log(movie)

  return (
    
    <View style={{flex:1, padding: 20}}>
      <Text>{movie.release_date}</Text>
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

export default Reviews;
