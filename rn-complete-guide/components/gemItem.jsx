import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GemItem = ({ data }) => {
  return (
    <View style={styles.gem}>
      <Text>{data.item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "gray",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GemItem;
