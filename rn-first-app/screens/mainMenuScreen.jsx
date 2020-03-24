import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Button,
  Modal,
  TextInput,
  Keyboard,
  Alert
} from "react-native";

import StartGameScreen from "./startGameScreen";

import Card from "./../components/card";

const MainMenuScreen = props => {
  const [isSetupModalVisible, setIsSetupModalVisible] = useState(false);
  const onPlay = () => {
    Alert.alert("Hi", "What will you name your players?", [
      {
        text: "Go Back",
        style: "cancel"
      },
      {
        text: "Yeah!",
        onPress: () => setIsSetupModalVisible(true)
      }
    ]);
  };

  return (
    <View style={styles.screen}>
      <Button title="Play" onPress={onPlay} />
      <Modal visible={isSetupModalVisible} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.setupMenu}>
            <Card>
              <View style={styles.input}>
                <TextInput
                  placeholder="Player 1 Name"
                  textAlign="center"
                  maxLength={10}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Back"
                  onPress={() => setIsSetupModalVisible(false)}
                />
                <Button
                  title="Next"
                  onPress={() =>
                    props.setActiveScreen(<StartGameScreen {...props} />)
                  }
                />
              </View>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  setupMenu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 10
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default MainMenuScreen;
