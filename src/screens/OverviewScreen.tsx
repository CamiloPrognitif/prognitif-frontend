import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

export default function OverviewScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-gray-50`}>
      {/* User card */}
      <LinearGradient
        colors={["#A5F3FC", "#6EE7B7"]}
        start={[0, 0]}
        end={[1, 1]}
        style={tw`rounded-xl mx-4 mt-4 p-4`}
      >
        <Text style={tw`text-white font-semibold text-base`}>
          Susana Mejía Echeverry
        </Text>
        <Text style={tw`text-white`}>Nacimiento: 30/07/1943</Text>
        <Text style={tw`text-white`}>Alcohol: Moderado</Text>
        <Text style={tw`text-white`}>Fuma: Nunca</Text>
      </LinearGradient>

      {/* Health information header */}
      <View style={tw`mx-4 mt-6 mb-2 flex-row justify-between items-center`}>
        <Text style={tw`text-base font-semibold`}>Health information</Text>
        <Text style={tw`text-blue-600`}>Edit</Text>
      </View>

      {/* Aquí irán tabs Diagnosis / Limitations / … */}

      {/* Vitals grid */}
      <View style={tw`flex-row flex-wrap justify-between mx-4`}>
        {[
          { label: "HR", value: "67 bpm", icon: "❤︎" },
          { label: "RR", value: "18 bpm", icon: "🫁" },
          { label: "SpO₂", value: "80%", icon: "🩸" },
          { label: "Temp", value: "37 °C", icon: "🌡️" },
        ].map((v) => (
          <View key={v.label} style={tw`w-1/2 bg-white p-4 mb-4 rounded-xl`}>
            <Text style={tw`text-lg`}>{v.icon}</Text>
            <Text style={tw`font-bold`}>{v.label}</Text>
            <Text style={tw`text-xl`}>{v.value}</Text>
          </View>
        ))}
      </View>

      {/* Recent Events header */}
      <Text style={tw`mx-4 mb-2 text-base font-semibold`}>Recent Events</Text>

      {/* Events list (placeholder) */}
      <View style={tw`mx-4 bg-white rounded-xl`}>
        {["Possible stress", "Temperature increase"].map((e) => (
          <View key={e} style={tw`flex-row justify-between p-3 border-b`}>
            <Text>{e}</Text>
            <Text>□</Text>
          </View>
        ))}
      </View>

      {/* Add Event button */}
      <View style={tw`mx-4 my-4`}>
        <Text style={tw`text-center py-3 border rounded-xl text-blue-600`}>
          Add Event
        </Text>
      </View>
    </ScrollView>
  );
}
