import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "30%",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary
  },
  headerTitle: {
    color: "black",
    fontSize: 18
  }
});

export default Header;
