import React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { RenderListItem } from "./ListItem.jsx";

export default (props) => {
  const { nodes, setNodes, GetColorSchema } = props;
  return (
    <SafeAreaView style={styles.test}>
      <FlatList
        data={nodes}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => RenderListItem({ item }, GetColorSchema)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  test: {
    width: '100%',
    overflow: 'hidden',
  },
});