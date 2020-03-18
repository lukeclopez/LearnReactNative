import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "./../components/card";
import fish from "../constants/fish";

const StartGameScreen = () => {
  const [message, setMessage] = useState("Press a button to begin!");
  const [pointsThisRound, setPointsThisRound] = useState(0);
  const [score, setScore] = useState([0, 0]);
  const [turn, setTurn] = useState(0);

  const aOrAn = word => {
    const isFirstLetterVowel = /[aeiou]/i.test(word[0]);
    return (isFirstLetterVowel ? " an " : " a ") + word;
  };

  const isBadFish = fish => fish.points < 0;

  const onFish = () => {
    const caughtFish = fish[Math.floor(Math.random() * fish.length)];
    const { name, points } = caughtFish;
    setMessage("You caught" + aOrAn(name));
    if (isBadFish(caughtFish)) {
      setPointsThisRound(0);
      onEndTurn();
      return;
    }
    setPointsThisRound(pointsThisRound + points);
  };

  const onEndTurn = () => {
    const newScore = [...score];
    newScore[turn] += pointsThisRound;
    setPointsThisRound(0);
    setScore(newScore);
    setTurn(turn === 0 ? 1 : 0);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{message}</Text>
      <Card style={styles.buttonsCard}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button title="Fish" onPress={onFish} />
          </View>
          <View style={styles.buttons}>
            <Button title="End Turn" onPress={onEndTurn} />
          </View>
        </View>
      </Card>
      <View>
        <Text>{pointsThisRound}</Text>
        <Text>Player 1: {score[0]}</Text>
        <Text>Player 2: {score[1]}</Text>
      </View>
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
