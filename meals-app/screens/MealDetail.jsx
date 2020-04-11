import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { MEALS } from "../data/dummyData";

const MealDetail = (props) => {
  const mId = props.navigation.getParam("mealId");
  const meal = MEALS.find((m) => m.id === mId);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
      <Button
        title="Back to Categories"
        onPress={() => props.navigation.popToTop()}
      />
      <Button title="Back" onPress={() => props.navgation.goBack()} />
    </View>
  );
};

MealDetail.navigationOptions = (navigationData) => {
  const mId = navigationData.navigation.getParam("mealId");
  const meal = MEALS.find((m) => m.id === mId);

  return {
    headerTitle: meal.title,
  };
};

export default MealDetail;

const styles = StyleSheet.create({});
