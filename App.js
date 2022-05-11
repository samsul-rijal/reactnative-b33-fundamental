import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import EmbedExpression from "./src/screens/embedExpression";

export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Use Component */}
      <EmbedExpression />
    </View>
  );
}
