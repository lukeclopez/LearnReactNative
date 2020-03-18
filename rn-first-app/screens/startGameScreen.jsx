import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "./../components/card";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>You caught a dumb fish!</Text>
      <Card style={styles.buttonsCard}>
        <View style={styles.buttonContainer}>
          <Button title="Fish Again" />
          <Button title="End Turn" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  title: { fontSize: 20, marginVertical: 10 },
  buttonsCard: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 30,
    width: "80%"
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default StartGameScreen;
