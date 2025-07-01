// src/screens/OverviewScreen.tsx
import React, { useState, useCallback } from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import useEventsCrud, { Event } from "../hooks/useEventsCrud";
import ModalForm from "../components/ModalForm";
import HealthInfoModal from "../components/HealthInfoModal";
import VitalsSimulator from "../components/VitalsSimulator";

const sections = [
  {
    key: "Diagnosis",
    text: "Progressive cognitive decline with memory impairment and difficulty in daily activities, consistent with Alzheimer’s disease.",
  },
  { key: "Limitations", text: "No significant limitations reported." },
  { key: "Allergies", text: "No known allergies." },
  { key: "Notes", text: "Additional observations can go here." },
] as const;

export default function OverviewScreen() {
  // CRUD hook
  const { events, addEvent, updateEvent, toggleViewed, removeEvent } =
    useEventsCrud();

  // Modal state (Eventos)
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

  // State de pestañas internas
  const [activeTab, setActiveTab] = useState<(typeof sections)[number]["key"]>(
    sections[0].key
  );

  // State para el modal de Health Info
  const [healthModalVisible, setHealthModalVisible] = useState(false);
  const [healthInfo, setHealthInfo] = useState(
    Object.fromEntries(sections.map((s) => [s.key, s.text]))
  );

  // Cuando guardamos en HealthInfoModal
  const handleHealthSave = () => {
    setHealthModalVisible(false);
    // aquí podrías también enviar a backend o similar
  };

  // Datos de vitals
  const vitals = [
    { label: "HR", value: "67 bpm", icon: "❤︎" },
    { label: "RR", value: "18 bpm", icon: "🫁" },
    { label: "SpO₂", value: "80%", icon: "🩸" },
    { label: "Temp", value: "37 °C", icon: "🌡️" },
  ];

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
          <Pressable onPress={() => setHealthModalVisible(true)}>
            <Text style={tw`text-blue-600`}>Edit</Text>
          </Pressable>
        </View>

        {/* 1) Tab strips */}
        <View style={tw`flex-row mx-4 mb-2`}>
          {sections.map((sec) => (
            <Pressable
              key={sec.key}
              onPress={() => setActiveTab(sec.key)}
              style={tw`flex-1 items-center py-2`}
            >
              <Text
                style={tw`${
                  activeTab === sec.key
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {sec.key}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* 2) Widget con el texto de la pestaña activa */}
        <View style={tw`bg-white mx-4 p-4 rounded-xl mb-4 shadow`}>
          <View style={tw`flex-row items-start`}>
            <MaterialCommunityIcons
              name="stethoscope"
              size={24}
              style={tw`text-gray-700 mr-3`}
            />
            <View style={{ flex: 1, maxHeight: 120 }}>
              <ScrollView nestedScrollEnabled={true}>
                <Text style={tw`text-gray-700`}>{healthInfo[activeTab]}</Text>
              </ScrollView>
            </View>
          </View>
        </View>

        {/* Vitals simulados en “tiempo real” (mock) */}
        <VitalsSimulator />

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
              {/* Columna 1 */}
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
                {/* Al hacer clic sobre el label, pasamos a editar */}
                <Pressable
                  onPress={() => {
                    setEditing(e);
                    setModalVisible(true);
                  }}
                  style={tw`ml-2`}
                >
                  <Text>{e.label}</Text>
                </Pressable>
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
              {/* Columna 4: checkbox */}
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
            style={tw`flex-row justify-center items-center py-3 my-4 border border-gray-300 rounded-xl bg-white shadow-lg`}
          >
            <MaterialIcons name="add" size={20} style={tw`text-gray-500`} />
            <Text style={tw`ml-2 text-gray-500`}>Add Event</Text>
          </View>
        </Pressable>
      </ScrollView>

      {/* Modal Add/Edit (eventos) */}
      <ModalForm
        isVisible={modalVisible}
        event={editing}
        onSave={editing ? handleUpdate : handleAdd}
        onClose={() => {
          setModalVisible(false);
          setEditing(undefined);
        }}
      />

      {/* Modal para editar Health Information */}
      <HealthInfoModal
        visible={healthModalVisible}
        data={healthInfo}
        onChange={(key, val) =>
          setHealthInfo((prev) => ({ ...prev, [key]: val }))
        }
        onSave={handleHealthSave}
        onClose={() => setHealthModalVisible(false)}
      />
    </>
  );
}
