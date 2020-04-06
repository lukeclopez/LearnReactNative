import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

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

export default CategoryMeals;

const styles = StyleSheet.create({});
