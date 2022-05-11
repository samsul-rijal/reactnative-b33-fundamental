import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const socialMedia = ['Instagram', 'Facebook', 'Twitter', 'Tiktok']

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      {socialMedia.map((item)=>(
        <Text>{item}</Text>
      ))}

      {/* {socialMedia.map((item)=>{
        return(
          <Text>{item}</Text>
        )
      })} */}
    </View>
  );
}
