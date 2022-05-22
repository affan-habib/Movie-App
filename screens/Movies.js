import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { callApi, selectApi } from "../reducers/apiSlice";
import { addfavorite } from "../reducers/favoriteSlice";
import Button from "../components/Button";
import globalStyles from "../styles/globalStyle";
import Icon from "react-native-vector-icons/MaterialIcons";

const Movies = ({ navigation }) => {
  const [page, setPage] = useState(4);

  const {
    loading,
    details = {
      results: {},
    },
  } = useSelector(selectApi);
  const dispatch = useDispatch();
  console.log(loading);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "/",
        output: "details",
        parameters: {
          page: page,
        },
      })
    );
  }, [dispatch, page]);

  // const allmovies = details.results
  const ItemView = ({ item }) => {
    return (
      <View style={styles.movie}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Movie Details", { item })}
        >
          <Image
            style={globalStyles.img}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          />
        </TouchableOpacity>
        <View style={{ marginTop: -40, marginLeft: 20, paddingBottom: 30 }}>
          <Button
            iconName="favorite"
            onPress={() => dispatch(addfavorite(item))}
          />
        </View>
        <Text style={globalStyles.headingThree}>
          {item.original_title.toUpperCase()}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="star" size={20} color="#0296e5" />
            <Text style={globalStyles.headingThree}> {item.vote_average}</Text>
          </View>
          <Text style={globalStyles.headingThree}>
            Year: {item.release_date.slice(0, 4)}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pagination}>
        <Button iconName="arrow-back" onPress={() => setPage(page - 1)} />
        <Button iconName="arrow-forward" onPress={() => setPage(page + 1)} />
      </View>
      {loading ? (
        <View style={[styles.containerAc, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            style={styles.flatlist}
            data={details.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
            numColumns={2}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
    borderColor: "#0296e5",
  },
  flatlist: {
    border: 1,
    borderColor: "#0296e5",
    marginBottom: 60,
  },
  pagination: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  containerAc: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Movies;
