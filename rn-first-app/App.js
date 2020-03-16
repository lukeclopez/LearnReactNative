import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("Luke Lopez was here!");

  const handlePress = () => {
    setText("You just pressed the button.");
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change text" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
