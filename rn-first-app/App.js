import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/header";
import MainMenuScreen from "./screens/mainMenuScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [loading, setLoading] = useState(true);

  const renderActiveScreen = () => {
    if (activeScreen) return activeScreen;
    return <MainMenuScreen setActiveScreen={setActiveScreen} />;
  };

  if (loading)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoading(false)}
        onError={err => console.log(err)}
      />
    );

  return (
    <View>
      <Header title="Hi" />
      {renderActiveScreen()}
    </View>
  );
}

const styles = StyleSheet.create({});
