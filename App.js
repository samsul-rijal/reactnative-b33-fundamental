import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import List from "./src/screens/flatList";

//Import Screen


export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Use Component */}
      <List />
    </View>
  );
}
