import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text,FlatList } from "react-native";

export default function List() {
  // Make Dummy Data with Array
  const socialMedia = 
  [
    {
      name: 'Instagram'
    },
    {
      name: 'Facebook'
    },
    {
      name: 'Twitter'
    },
    {
      name: 'Tiktok'
    },
  ]


  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <FlatList 
        data={socialMedia}
        renderItem={({item}) => <Text>{item.name}</Text> }
        keyExtractor={(item) => item.name}
      />

    </View>
  );
}
