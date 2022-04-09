import React from "react";
import List from "./components/List.jsx";
import { View, StyleSheet } from "react-native";
import { EventCard, CopingCard } from "./models/cards.js";

export default function App() {
  const startNodes = [
    new EventCard("main-0", null, "darkgray", OnUpdate),
    new CopingCard("main-0", null, "gray", OnUpdate),
  ];
  const [nodes, setNodes] = React.useState(startNodes);
  const colorSchemas = [
    {
      key: "gray",
      backgroundColor: "#cccccc",
      inner: "#666666",
      color: "black",
    },
    {
      key: "red",
      backgroundColor: "#ff7f7f",
      inner: "#804040",
      color: "black",
    },{
      key: "green",
      backgroundColor: "#66cc66",
      inner: "#336633",
      color: "black",
    },
    {
      key: "blue",
      backgroundColor: "#b2deff",
      inner: "#596f80",
      color: "black",
    },
    {
      key: "yellow",
      backgroundColor: "#ffff7f",
      inner: "#808040",
      color: "black",
    },{
      key: "darkgray",
      backgroundColor: "#35363a",
      inner: "#808040",
      color: "white",
    },
    
  ];

  function OnUpdate() {
    setNodes(
      nodes.map((node) => {
        if (node.children.length > 0) {
          return {
            ...node,
            children: node.children.map((child) => {
              return {
                ...child,
                parent: node,
              };
            }),
          };
        }
        return node;
      })
    );
  }

  const GetColorSchema = (key) => {
    for (let i = 0; i < colorSchemas.length; i++) {
      if (colorSchemas[i].key === key) return colorSchemas[i];
    }
    return colorSchemas[0];
  };
  return (
    <View style={styles.container}>
      <List nodes={nodes} setNodes={setNodes} GetColorSchema={GetColorSchema} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    paddingTop: 40,
    width: "100%",
  },
});
