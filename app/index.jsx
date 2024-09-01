import React from "react";
import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-[#FAD9CA]">
      <Text className="text-4xl">Welcome To FarmEase</Text>
      <Image
        source={require('../assets/images/image2.png')}
        className="w-[400px] h-[500px] mt-10" 
      />
      
    </View>
  );
}
