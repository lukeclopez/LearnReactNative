import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

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

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites,
});

export default createAppContainer(MealsFavTabNavigator);
