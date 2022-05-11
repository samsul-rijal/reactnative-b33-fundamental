import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,TouchableOpacity } from "react-native";

export default function Event() {
  // Create Function Here
  function Greeting(){
    return alert("Selamat pagi")
  }

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <TouchableOpacity onPress={Greeting}>
        Greeting
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> alert("Hello Batch 33")}>
        Press Here
      </TouchableOpacity>

    </View>
  );
}
