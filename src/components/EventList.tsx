// src/components/EventList.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export interface Event {
  id: string;
  label: string;
  type: "stress" | "warning" | string;
  time: string;
  viewed: boolean;
}

interface EventListProps {
  events: Event[];
  onToggle: (id: string) => void;
}

export default function EventList({ events, onToggle }: EventListProps) {
  return (
    <View className="bg-white rounded-xl p-4 mx-4 mb-4 shadow">
      {events.map((e) => (
        <View key={e.id} className="flex-row justify-between items-center mb-3">
          <View className="flex-row items-center">
            <MaterialIcons
              name={e.type === "stress" ? "sentiment-dissatisfied" : "warning"}
              size={20}
              className={
                e.type === "stress" ? "text-yellow-500" : "text-red-500"
              }
            />
            <Text className="ml-2">{e.label}</Text>
          </View>
          <Pressable onPress={() => onToggle(e.id)}>
            <View
              className={`w-6 h-6 border-2 rounded ${
                e.viewed ? "bg-blue-500" : "border-gray-400"
              }`}
            />
          </Pressable>
        </View>
      ))}
    </View>
  );
}
