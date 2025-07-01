// src/components/VitalsSimulator.tsx
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { useMockVitals, Vital } from "../hooks/useMockVitals";

export default function VitalsSimulator() {
  const vitals = useMockVitals(/* opcionalmente el intervalo */);

  return (
    <View style={tw`flex-row mx-4 justify-evenly mb-4`}>
      {vitals.map((v: Vital) => {
        // Separar valor numérico y la unidad para estilizar por separado
        const match = v.value.match(/^([\d.]+)(.*)$/);
        const number = match ? match[1] : v.value;
        const unit = match ? match[2] : "";
        return (
          <View
            key={v.label}
            style={tw`flex-1 bg-white p-3 rounded-xl mx-1 items-center`}
          >
            <Text style={tw`text-2xl mb-1`}>{v.icon}</Text>
            <Text style={tw`font-semibold text-sm text-center`}>{v.label}</Text>
            {/* Valor con unidad alineados */}
            <View style={tw`flex-row items-baseline mt-1`}>
              <Text style={tw`text-lg font-bold`}>{number}</Text>
              <Text style={tw`text-xs ml-1 font-bold`}>{unit}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
