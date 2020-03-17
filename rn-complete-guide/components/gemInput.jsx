import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GemInput = ({ visible, onAddGem, onCancel }) => {
  const [enteredGem, setEnteredGem] = useState("");

  const addGem = () => {
    if (enteredGem.length < 1) {
      return;
    }
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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGem} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
        </View>
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
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    // This will ensure the buttons
    // are the same size on Android.
    width: "40%"
  }
});

export default GemInput;
