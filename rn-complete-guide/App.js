import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";

import GemItem from "./components/gemItem";
import GemInput from "./components/gemInput";

export default function App() {
  const [gems, setGems] = useState([]);
  const [isInputModalVisible, setIsInputModalVisible] = useState(false);

  const handleAddGem = gem => {
    // The function that returns an array
    // guarantees that the latest state
    // will be included.
    setGems(curGems => [
      ...curGems,
      { id: Math.random().toString(), value: gem }
    ]);
    setIsInputModalVisible(false);
  };

  const handleDelete = gemId => {
    setGems(curGems => [...curGems.filter(g => g.id != gemId)]);
  };

  const closeInputModal = () => setIsInputModalVisible(false);

  return (
    <View style={styles.screen}>
      <Button title="Add Gem" onPress={() => setIsInputModalVisible(true)} />
      <GemInput visible={isInputModalVisible} onAddGem={handleAddGem} onCancel={closeInputModal} />
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
