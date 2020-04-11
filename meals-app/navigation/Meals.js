import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Categories from "./../screens/Categories";
import CategoryMeals from "./../screens/CategoryMeals";
import MealDetail from "./../screens/MealDetail";
import Favorites from "./../screens/Favorites";

import colors from "./../constants/colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetail: {
      screen: MealDetail,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "",
      },
      headerTintColor: colors.primaryColor,
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
        tabBarLabel: "All Meals",
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator);
