import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummyData";
import MyHeaderButton from "./../components/HeaderButton";
import { HeaderButton } from "react-navigation-header-buttons";

const MealDetail = (props) => {
  const mId = props.navigation.getParam("mealId");
  const meal = MEALS.find((m) => m.id === mId);

  return (
    <View style={styles.screen}>
      <View>
        {meal.ingredients.map((ing, index) => {
          return <Text key={index}>{ing}</Text>;
        })}
      </View>
      <View>
        {meal.steps.map((step, index) => {
          return <Text key={index}>{step}</Text>;
        })}
      </View>
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("FAVE!");
          }}
        />
        >
      </HeaderButtons>
    ),
  };
};

export default MealDetail;

const styles = StyleSheet.create({ screen: { margin: 10 } });
