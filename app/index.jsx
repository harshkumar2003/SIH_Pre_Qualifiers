import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function Index({ navigation }) 
{
  return (
    <View className="h-screen relative  bg-[#FAD9CA]">
      {/* image */}
      <View className="flex justify-center items-center ">
        <Image
          source={require("../assets/images/image2.png")}
          className="w-screen h-[520px]"
        />
      </View>
      {/* text */}
      <View className="flex items-center pt-3">
        <Text style={{fontFamily:'inter',}} className="font-light text-2xl font-inter">Connecting Farms</Text>
        <Text style={{fontFamily:'inter',}} className="font-light text-2xl font-inter">Feeding Families</Text>
      </View>

      {/* button sell */}
      <View className="flex items-center top-4">
        <Link href={"/login/farmer"}>
          <View className="w-[170px] h-[60px] bg-custom-blue border border-white shadow rounded-[13.812px] flex justify-center items-center text-center">
            <Text style={{fontFamily:'inter',}}  className="font-medium text-4xl text-center text-white">SELL</Text>
          </View>
        </Link>
      </View>

      {/* button buy */}
      <View className="flex items-center top-8">
        <Link href={"/login/buyer"}>
          <View className="w-[170px] h-[60px] bg-[#009483] border border-white shadow rounded-[13.812px] flex justify-center items-center text-center">
            <Text style={{fontFamily:'inter',}}  className="text-4xl text-center text-white font-medium">BUY</Text>
          </View>
        </Link>
      </View>

      {/* terms */}

      <View className="flex justify-center items-center top-[80px]">
        <Text style={{fontFamily:'inter'}} className="underline font-normal">Terms Of Services</Text>
      </View>

    </View>
  );
}
