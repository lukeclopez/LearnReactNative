import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Header from "./components/header";
import MainMenuScreen from "./screens/mainMenuScreen";

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);

  const renderActiveScreen = () => {
    if (activeScreen) return activeScreen;
    return <MainMenuScreen setActiveScreen={setActiveScreen} />;
  };

  return (
    <View>
      <Header title="Hi" />
      {renderActiveScreen()}
    </View>
  );
}

const styles = StyleSheet.create({});
