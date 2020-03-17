import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";

import GemItem from "./components/gemItem";
import GemInput from "./components/gemInput";

export default function App() {
  const [gems, setGems] = useState([]);

  const handleAddGem = gem => {
    // The function that returns an array
    // guarantees that the latest state
    // will be included.
    setGems(curGems => [
      ...curGems,
      { id: Math.random().toString(), value: gem }
    ]);
  };

  const handleDelete = gemId => {
    setGems(curGems => [...curGems.filter(g => g.id != gemId)]);
  };

  return (
    <View style={styles.screen}>
      <GemInput onAddGem={handleAddGem} />
      <FlatList
        data={gems}
        renderItem={gem => <GemItem data={gem} onDelete={handleDelete} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
