import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text } from "react-native";

export default function List(props) {
  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>{props.listData}</Text>
    </View>
  );
}
