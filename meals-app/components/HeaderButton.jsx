import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { Platform } from "react-native";

const MyHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "iOS" ? "white" : colors.primaryColor}
    />
  );
};

export default MyHeaderButton;
