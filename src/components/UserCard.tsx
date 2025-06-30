// src/components/UserCard.tsx
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";

interface UserCardProps {
  name: string;
  birth: string;
  alcohol: string;
  smoke: string;
}

export default function UserCard({
  name,
  birth,
  alcohol,
  smoke,
}: UserCardProps) {
  return (
    <LinearGradient
      colors={["#A5F3FC", "#6EE7B7"]}
      start={[0, 0]}
      end={[1, 1]}
      className="p-4 rounded-2xl flex-row justify-between items-center"
    >
      <View className="flex-1">
        <Text className="text-white text-xl font-semibold">{name}</Text>
        <Text className="text-white">Nacimiento: {birth}</Text>
      </View>
      <View className="flex-1 items-end">
        <Text className="text-white">Alcohol: {alcohol}</Text>
        <Text className="text-white">Fuma: {smoke}</Text>
      </View>
    </LinearGradient>
  );
}
