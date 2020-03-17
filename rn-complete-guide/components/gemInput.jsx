import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button } from "react-native";

const GemInput = ({ onAddGem }) => {
  const [enteredGem, setEnteredGem] = useState("");

  const addGem = () => {
    onAddGem(enteredGem);
    setEnteredGem("");
  };

  const handleChange = text => {
    setEnteredGem(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What gems have you found recently?"
        style={styles.input}
        onChangeText={handleChange}
        value={enteredGem}
      />
      <Button title="Add" onPress={addGem} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GemInput;
