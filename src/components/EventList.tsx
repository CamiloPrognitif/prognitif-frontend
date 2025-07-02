import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";

import type { Event } from "@types";

interface EventListProps {
  events: Event[];
  onToggle: (id: string) => void;
  onAdd: () => void;
  onEdit: (e: Event) => void;
  onRemove: (id: string) => void;
}

export default function EventList({
  events,
  onToggle,
  onAdd,
  onEdit,
  onRemove,
}: EventListProps) {
  return (
    <View style={tw`bg-white rounded-xl p-4 mx-4 mb-4 shadow`}>
      {events.map((e) => (
        <View key={e.id} style={tw`flex-row justify-between items-center mb-3`}>
          <Pressable
            onPress={() => onEdit(e)}
            style={tw`flex-row items-center`}
          >
            <MaterialIcons
              name={e.type === "stress" ? "sentiment-dissatisfied" : "warning"}
              size={20}
              style={tw`
                ${e.type === "stress" ? "text-yellow-500" : "text-red-500"}
              `}
            />
            <Text style={tw`ml-2`}>{e.label}</Text>
          </Pressable>
          <Pressable onPress={() => onToggle(e.id)}>
            <View
              style={tw`
                w-6 h-6 border-2 rounded
                ${e.viewed ? "bg-blue-500" : "border-gray-400"}
              `}
            />
          </Pressable>
        </View>
      ))}

      {/* Botón Add */}
      <Pressable onPress={onAdd}>
        <View
          style={tw`mt-2 flex-row justify-center items-center py-2 border rounded-full`}
        >
          <MaterialIcons name="add" size={24} style={tw`text-gray-500`} />
          <Text style={tw`ml-2 text-gray-500`}>Add Event</Text>
        </View>
      </Pressable>
    </View>
  );
}
