import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import colors from "../constants/colors";

const MyButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.main}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  title: {}
});

export default MyButton;
