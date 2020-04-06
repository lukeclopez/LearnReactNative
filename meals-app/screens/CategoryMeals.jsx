import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import colors from "../constants/colors";

const CategoryMeals = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The category meals screen!</Text>
      <Button
        title="Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = {
  headerTitle: "Category Meals",
  headerStyle: {
    backgroundColor: "",
  },
  headerTintColor: colors.primaryColor,
};

export default CategoryMeals;

const styles = StyleSheet.create({});
