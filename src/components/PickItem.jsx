import React from "react";
import { Picker } from "react-native";

export function PickItem(props) {
  const { styles, item, colorSchema } = props;
  return (
    <Picker
      style={[styles.text, colorSchema, { borderWidth: 1, borderStyle: 'solid', borderColor: 'red', width: "100%", margin: 0}]}
      selectedValue={item.content.options[0].value}
    >
      {item.content.options.map((opt) => {
        return <Picker.Item label={opt.label} value={opt.value} />;
      })}
    </Picker>
  );
}
