// src/components/VitalsSimulator.tsx
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { useMockVitals, Vital } from "../hooks/useMockVitals";

export default function VitalsSimulator() {
  const vitals = useMockVitals(/* opcionalmente el intervalo */);

  return (
    <View style={tw`flex-row mx-4 justify-between mb-4`}>
      {vitals.map((v: Vital) => (
        <View
          key={v.label}
          style={tw`flex-1 bg-white p-3 rounded-xl mx-1 items-center`}
        >
          <Text style={tw`text-2xl mb-1`}>{v.icon}</Text>
          <Text style={tw`font-semibold text-sm`}>{v.label}</Text>
          <Text style={tw`text-lg`}>{v.value}</Text>
        </View>
      ))}
    </View>
  );
}
