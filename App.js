import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    // View는 기본적으로 flex box이고, flexDirection의 기본값은 "column"이다!
    <View style={{ flex: 1, flexDirection: "row" }}>
      {/* 
      React Native에서는 height와 width를 가지고 layout을 제작하지 않는다. 절대!
      React Native에서는 "숫자"만 생각하면 된다.(비율!) 
      */}
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1.5, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}
