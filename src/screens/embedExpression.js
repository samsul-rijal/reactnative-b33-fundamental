import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text } from "react-native";

export default function EmbedExpression() {
  // Create Function Here
  function getHello(){
    return "Batch 33"
  }

  // Create a variable Here
  const bootcamp = "Dumbways.id"

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>
        Welcome {getHello()} di {bootcamp} 
      </Text>
    </View>
  );
}
