import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "./../components/card";
import fish from "../constants/fish";

const StartGameScreen = () => {
  const [message, setMessage] = useState("Press a button to begin!");
  const [points, setPoints] = useState([0, 0]);
  const [player1Turn, setPlayer1Turn] = useState(-1);

  const aOrAn = word => {
    const isFirstLetterVowel = /[aeiou]/i.test(word[0]);
    return (isFirstLetterVowel ? " an " : " a ") + word;
  };

  const onFish = () => {
    const caughtFish = fish[Math.floor(Math.random() * fish.length)];
    const { name } = caughtFish;
    setMessage("You caught" + aOrAn(name));
    setPlayer1Turn(player1Turn < 0 ? false : !player1Turn);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{message}</Text>
      <Card style={styles.buttonsCard}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              title={"Fish" + (player1Turn > -1 ? " Again" : "")}
              onPress={onFish}
            />
          </View>
          <View style={styles.buttons}>
            <Button title="End Turn" />
          </View>
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
  },
  buttons: {
    marginHorizontal: 20
  }
});

export default StartGameScreen;
