import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Categories from "./../screens/Categories";
import CategoryMeals from "./../screens/CategoryMeals";
import MealDetail from "./../screens/MealDetail";

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

export default createAppContainer(MealsNavigator);
