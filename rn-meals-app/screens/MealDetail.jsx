import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const MealDetail = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The meal detail screen!</Text>
      <Button
        title="Back to Categories"
        onPress={() => props.navigation.popToTop()}
      />
      <Button title="Back" onPress={() => props.navgation.goBack()} />
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({});
