import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { CATEGORIES } from "../data/dummyData";

const CategoryMeals = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);
  return (
    <View style={styles.screen}>
      <Text>The category meals screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMeals;

const styles = StyleSheet.create({});
