import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";

import GemItem from "./components/gemItem";

export default function App() {
  const [enteredGem, setEnteredGem] = useState("");
  const [gems, setGems] = useState([]);

  const handleChange = text => {
    setEnteredGem(text);
  };

  const handlePress = () => {
    // The function that returns an array
    // guarantees that the latest state
    // will be included.
    setGems(curGems => [
      ...curGems,
      { key: Math.random().toString(), value: enteredGem }
    ]);
    setEnteredGem("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What gems have you found recently?"
          style={styles.input}
          onChangeText={handleChange}
          value={enteredGem}
        />
        <Button title="Add" onPress={handlePress} />
      </View>
      <FlatList data={gems} renderItem={gem => <GemItem data={gem} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderBottomColor: "black",
    padding: 10
  }
});
