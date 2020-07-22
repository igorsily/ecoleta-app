import React from "react";
import RNPickerSelect from "react-native-picker-select";

interface Props {
  items: { label: string; value: string }[];
  onSelectChange: (select: string) => void;
  label: string;
}
const Select: React.FC<Props> = ({ items, onSelectChange, label }) => {
  const placeholder = {
    label: label,
    value: null,
    color: "#322153",
  };
  return (
    <RNPickerSelect
      onValueChange={onSelectChange}
      items={typeof items.length !== "undefined" ? items : []}
      placeholder={placeholder}
    />
  );
};

export default Select;
