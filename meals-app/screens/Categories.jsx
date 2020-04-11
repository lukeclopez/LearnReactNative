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
import CategoryTile from "./../components/CategoryTile";

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryTile
        itemData={itemData}
        color={itemData.item.color}
        onPress={() =>
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          })
        }
      />
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
};

export default Categories;

const styles = StyleSheet.create({
  gridItem: { flex: 1, margin: 15, height: 150 },
});
