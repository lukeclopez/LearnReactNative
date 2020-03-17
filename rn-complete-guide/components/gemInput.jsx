import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GemInput = ({ visible, onAddGem }) => {
  const [enteredGem, setEnteredGem] = useState("");

  const addGem = () => {
    onAddGem(enteredGem);
    setEnteredGem("");
  };

  const handleChange = text => {
    setEnteredGem(text);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What gems have you found recently?"
          style={styles.input}
          onChangeText={handleChange}
          value={enteredGem}
        />
        <Button title="Add" onPress={addGem} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderBottomColor: "black",
    padding: 10,
    marginBottom: 10
  }
});

export default GemInput;
