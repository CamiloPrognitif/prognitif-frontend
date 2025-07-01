// src/screens/OverviewScreen.tsx
import React, { useState, useCallback } from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import useEventsCrud, { Event } from "../hooks/useEventsCrud";
import ModalForm from "../components/ModalForm";

export default function OverviewScreen() {
  // CRUD hook
  const { events, addEvent, updateEvent, toggleViewed, removeEvent } =
    useEventsCrud();

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [editing, setEditing] = useState<Event | undefined>(undefined);

  // Timestamp de última operación
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const recordUpdate = useCallback(() => setLastUpdate(new Date()), []);

  // Wrappers que persisten + marcan timestamp
  const handleAdd = useCallback(
    (e: Event) => {
      addEvent(e);
      recordUpdate();
    },
    [addEvent]
  );
  const handleUpdate = useCallback(
    (e: Event) => {
      updateEvent(e);
      recordUpdate();
    },
    [updateEvent]
  );
  const handleToggle = useCallback(
    (id: string) => {
      toggleViewed(id);
      recordUpdate();
    },
    [toggleViewed]
  );
  const handleRemove = useCallback(
    (id: string) => {
      removeEvent(id);
      recordUpdate();
    },
    [removeEvent]
  );

  // Formatea “X min ago”
  const getTimeAgo = () => {
    if (!lastUpdate) return "";
    const mins = Math.floor((Date.now() - lastUpdate.getTime()) / 60000);
    return mins <= 0 ? "Updated just now" : `Updated ${mins} min ago`;
  };

  return (
    <>
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

        {/* Aviso de última actualización */}
        {lastUpdate && (
          <Text style={tw`mx-4 mt-2 text-right text-xs text-gray-500`}>
            {getTimeAgo()}
          </Text>
        )}

        {/* Recent Events header */}
        <Text style={tw`mx-4 mt-4 mb-2 text-base font-semibold`}>
          Recent Events
        </Text>

        {/* Recent Events 4-columnas */}
        <View style={tw`mx-4 bg-white rounded-xl overflow-hidden shadow`}>
          {events.map((e) => (
            <View
              key={e.id}
              style={tw`flex-row items-center px-4 py-3 border-b border-gray-200`}
            >
              {/* Columna 1: icon+label (flex:2) */}
              <View style={[tw`flex-row items-center`, { flex: 2 }]}>
                <MaterialIcons
                  name={
                    e.type === "stress"
                      ? "sentiment-dissatisfied"
                      : e.type === "warning"
                      ? "warning"
                      : "event"
                  }
                  size={20}
                  style={tw`
                    ${
                      e.type === "warning"
                        ? "text-red-500"
                        : e.type === "stress"
                        ? "text-yellow-500"
                        : "text-blue-500"
                    }
                  `}
                />
                <Text style={tw`ml-2`}>{e.label}</Text>
              </View>

              {/* Columna 2: date */}
              <View style={tw`flex-1 items-center`}>
                <Text style={tw`text-sm text-gray-500`}>
                  {e.date ?? "Today"}
                </Text>
              </View>

              {/* Columna 3: time */}
              <View style={tw`flex-1 items-center`}>
                <Text style={tw`text-sm text-gray-500`}>{e.time}</Text>
              </View>

              {/* Columna 4: checkbox (width:30) */}
              <Pressable
                onPress={() => handleToggle(e.id)}
                style={[
                  tw`items-center justify-center`,
                  { width: 30, height: 30 },
                ]}
              >
                <View
                  style={tw`
                  w-6 h-6 border-2 rounded items-center justify-center
                  ${e.viewed ? "bg-blue-500" : "border-gray-400"}
                `}
                >
                  {e.viewed && (
                    <MaterialIcons
                      name="check"
                      size={16}
                      style={tw`text-white`}
                    />
                  )}
                </View>
              </Pressable>
            </View>
          ))}
        </View>
        {/* Botón Add Event */}
        <Pressable
          onPress={() => {
            setEditing(undefined);
            setModalVisible(true);
          }}
          style={tw`mx-4`}
        >
          <View
            style={tw`flex-row justify-center items-center py-3 my-4 
                border border-gray-300 rounded-xl 
                bg-white shadow-lg`}
          >
            <MaterialIcons name="add" size={20} style={tw`text-gray-500`} />
            <Text style={tw`ml-2 text-gray-500`}>Add Event</Text>
          </View>
        </Pressable>
      </ScrollView>

      {/* Modal Add/Edit */}
      <ModalForm
        isVisible={modalVisible}
        event={editing}
        onSave={editing ? handleUpdate : handleAdd}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
