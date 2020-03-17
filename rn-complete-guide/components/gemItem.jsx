import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GemItem = ({ data, onDelete }) => {
  const deleteGem = () => onDelete(data.item.id);
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={deleteGem}>
      <View style={styles.gem}>
        <Text>{data.item.value}</Text>
      </View>
    </TouchableOpacity>
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
