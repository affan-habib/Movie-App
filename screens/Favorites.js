import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import globalStyles from "../styles/globalStyle";

const Favorites = ({ navigation }) => {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
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
        <Text style={globalStyles.headingThree}>
          {item.original_title.toUpperCase()}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
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
