import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from "react-native";

import Card from "./../components/card";
import defaultStyles from "../constants/defaultStyles";
import fish from "../constants/fish";

const renderListItem = (prevCatch, key) => {
  return (
    <View style={styles.listItem} key={key}>
      <Text>
        Player {prevCatch.turn + 1} caught a {prevCatch.name}
      </Text>
    </View>
  );
};

const StartGameScreen = ({ playerNames }) => {
  const [message, setMessage] = useState("Press a button to begin!");
  const [pointsThisRound, setPointsThisRound] = useState(0);
  const [caughtFish, setCaughtFish] = useState(fish[0]);
  const [prevCatches, setPrevCatches] = useState([]);
  const [score, setScore] = useState([0, 0]);
  const [turn, setTurn] = useState(0);

  const aOrAn = word => {
    const isFirstLetterVowel = /[aeiou]/i.test(word[0]);
    return (isFirstLetterVowel ? " an " : " a ") + word;
  };

  const onFish = () => {
    const newFish = fish[Math.floor(Math.random() * fish.length)];
    const { name, points } = newFish;
    setMessage("You caught" + aOrAn(name));
    setCaughtFish(newFish);
    if (newFish.isBadFish) {
      onEndTurn(false);
      return;
    }
    setPointsThisRound(pointsThisRound + points);
    setPrevCatches(prevFishes => [{ ...newFish, turn }, ...prevFishes]);
  };

  const onEndTurn = (addPoints = true) => {
    if (addPoints) {
      const newScore = [...score];
      newScore[turn] += pointsThisRound;
      setScore(newScore);
    }
    setPointsThisRound(0);
    setTurn(turn === 0 ? 1 : 0);
  };

  return (
    <View style={styles.screen}>
      <Image source={caughtFish.image} style={styles.fishImage} />
      <Text style={defaultStyles.bold}>{message}</Text>
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
      <Card style={styles.infoCard}>
        <View style={{ alignContent: "center" }}>
          <Text>Points This Round: {pointsThisRound}</Text>
          <Text>
            {playerNames[0]}: {score[0]}
          </Text>
          <Text>
            {playerNames[1]}: {score[1]}
          </Text>
        </View>
      </Card>
      <Card style={{ ...styles.infoCard, height: "100%" }}>
        <ScrollView>
          {prevCatches.map((pc, index) => renderListItem(pc, index))}
        </ScrollView>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  fishImage: { width: 200, height: 200, resizeMode: "contain" },
  title: { fontSize: 20, marginVertical: 10 },
  buttonsCard: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
    padding: 30,
    width: "80%"
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttons: {
    marginHorizontal: 20
  },
  infoCard: {
    justifyContent: "center",
    marginVertical: 10,
    width: "80%",
    padding: 30
  },
  listItem: {
    marginVertical: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15
  }
});

export default StartGameScreen;
