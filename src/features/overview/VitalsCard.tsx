// src/components/VitalsCard.tsx
import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import type { Vital } from "types";

export default function VitalsGrid({ data }: { data: Vital[] }) {
  return (
    <View className="flex-row flex-wrap justify-between px-4">
      {data.map((v) => (
        <View
          key={v.label}
          className="w-1/2 bg-white rounded-xl p-4 mb-4 shadow"
        >
          <View className="flex-row items-center mb-2">
            <FontAwesome5
              name={v.icon as any}
              size={24}
              className="text-gray-600"
            />
            <Text className="ml-2 font-semibold">{v.label}</Text>
          </View>
          <Text className="text-2xl">{v.value}</Text>
        </View>
      ))}
    </View>
  );
}
