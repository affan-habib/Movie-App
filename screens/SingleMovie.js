import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import {
  callApi,
  selectApi
} from '../reducers/apiSlice'

const SingleMovie = () => {

  
  const { loading, details = {
    data: {}
  }} = useSelector(selectApi)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(callApi({
      // operationId : `users/${match.params.id}`,
      operationId : '/',
			output: 'details'
    }))
  // }, [dispatch, match.params.id])
  }, [dispatch])


  return (
    <View style={{flex:1}}>
      <Text>Single Movie</Text>
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
    height: 150,
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
