import React from 'react'
import {StyleSheet} from 'react-native'

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  headingOne: {
 fontSize: 30,
    color: '#0296e5',
    fontWeight: 'bold'
  },
  headingTwo: {
 fontSize: 20,
    color: 'black'
  },
  headingThree: {
    color: '#0296e5',
    fontSize: 14,
    fontWeight: 600
  },
  paragraph: {
    fontSize: 20,
    color: 'black'
  },
  movie: {
    flex: 1,
    margin: 10,
  },
  flatlist: {
    marginTop: 20,
    padding: 10,
  },
  img: {
      width: "100%",
      height: 400,
      resizeMode: "cover",
  }
});

export default globalStyles;