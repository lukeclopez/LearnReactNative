import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";

import MealItem from "./../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummyData";

const CategoryMeals = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter((e) => e.categoryIds.indexOf(catId) >= 0);

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        data={itemData.item}
        onPress={() =>
          props.navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View>
        <FlatList
          data={displayedMeals}
          renderItem={renderMealItem}
          style={{ width: "100%" }}
        />
      </View>
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

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
