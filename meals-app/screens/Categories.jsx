import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "./../data/dummyData";
import colors from "../constants/colors";

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => props.navigation.navigate("CategoryMeals")}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
      <Text>The category screen!</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          props.navigation.navigate("CategoryMeals");
        }}
      />
    </View>
  );
};

Categories.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTintColor: "white",
};

export default Categories;

const styles = StyleSheet.create({
  gridItem: { flex: 1, margin: 15, height: 150 },
});