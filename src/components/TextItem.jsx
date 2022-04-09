import React from "react";
import { TextInput } from "react-native";
export function TextItem(props) {
  const { styles, item, colorSchema } = props;
  return (
    <TextInput
      style={[styles.text, colorSchema]}
      multiline={true}
      numberOfLines={4}
      placeholder={item.placeholder}
    />
  );
}
