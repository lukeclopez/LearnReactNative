import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ShadowPropTypesIOS,
} from "react-native";

const CategoryTile = ({ itemData, onPress, color }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onPress}>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <Text style={styles.title} numberOfLines={2}>
          {itemData.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: { flex: 1, margin: 15, height: 150 },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});

export default CategoryTile;
