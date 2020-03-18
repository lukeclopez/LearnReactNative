import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    borderRadius: 6,
    shadowRadius: 2
  }
});

export default Card;
