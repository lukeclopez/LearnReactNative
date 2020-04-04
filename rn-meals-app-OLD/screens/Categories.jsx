import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Categories = (props) => {
  return (
    <View style={styles.screen}>
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

export default Categories;

const styles = StyleSheet.create({});
