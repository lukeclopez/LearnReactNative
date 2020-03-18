import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Header from "./components/header";
import StartGameScreen from "./screens/startGameScreen";

export default function App() {
  return (
    <View>
      <Header title="Hi" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
