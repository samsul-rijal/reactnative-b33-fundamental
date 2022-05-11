import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import Props from "./src/screens/props";

export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Use Component */}
      <Props />
    </View>
  );
}
