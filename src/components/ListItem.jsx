import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";

import { TextItem } from "./TextItem";
import { PickItem } from "./PickItem";

import Icon from "react-native-vector-icons/AntDesign";

const renderActions = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        item.onClick();
      }}
    >
      <Text style={[styles.text, styles.title]}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const GetContentByType = (item, type, colorSchema) => {
  if (type==="text") {
    return <TextItem styles={styles} item={item} colorSchema={colorSchema}/>;
  } else if (type==="pick") {
      return <PickItem styles={styles} item={item} colorSchema={colorSchema}/>;
    }
  return <></>
}

export function RenderListItem({ item }, GetColorSchema) {
  const colorSchema = GetColorSchema(item.color);
  return (
    <View
      style={[
        styles.listItem,
        item.parent === null ? styles.rootItem : {},
        colorSchema,
      ]}
    >
      <View style={styles.titleView}>
        <Text style={[styles.text, styles.title, colorSchema]}>
          {item.title}
        </Text>
        {item.parent !== null ? (
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => item.Remove()}
          >
            <Icon name="close" size={20} color={colorSchema.color} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      <View style={styles.separator}></View>
      {/* CONTENT SECTION */}
      { item.types.map((type) => GetContentByType(item, type, colorSchema))}
      {/* ACTION SECTION */}
      <SafeAreaView style={styles.container}>
        {item.actions.length > 0 ? (
          <FlatList
            columnWrapperStyle={{ justifyContent: "space-around" }}
            numColumns={3}
            data={item.actions}
            keyExtractor={(action) => action.key}
            renderItem={renderActions}
          />
        ) : (
          <></>
        )}
        <FlatList
          data={item.children}
          keyExtractor={(lItem) => lItem.key}
          renderItem={(opts) => RenderListItem(opts, GetColorSchema)}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
    overflow: "hidden",
  },
  titleView: {
    flex: 1,
    alignItems: "flex-end",
    alignSelf: "flex-start",
    flexDirection: "row",
    width: "100%",
  },
  rootItem: {
    margin: 8,
    marginLeft: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 3,
  },
  listItem: {
    flex: 1,
    alignItems: "flex-start",
    padding: 0,
    borderStyle: "solid",
    borderColor: "black",
    borderLeftWidth: 6,
    borderRightWidth: 0,
    borderTopWidth: 2,
    borderBottomWidth: 1,
  },
  separator: {
    borderStyle: "solid",
    borderColor: "black",
    borderTopWidth: 1,
    height: 0,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "left",
    padding: 4,
    paddingRight: 6,
    paddingLeft: 6,
    margin: 8,
  },
});
