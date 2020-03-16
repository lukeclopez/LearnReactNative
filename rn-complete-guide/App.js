import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TextInput
          placeholder="What gems have you found recently?"
          style={{
            borderWidth: 1,
            borderBottomColor: "black",
            padding: 10
          }}
        />
        <Button title="+" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});
