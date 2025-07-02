import React, { useState, useCallback } from "react";
import {
  ScrollView,
  Text,
  View,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { useEventsCrud } from "../hooks";
import type { Event } from "../types";
import {
  ModalForm,
  HealthInfoModal,
  VitalsSimulator,
  Breadcrumb,
} from "../components";
import type { Crumb } from "../components/Breadcrumb";

import { useNavigation } from "@react-navigation/native";
import { SECTIONS } from "../constants";

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

  // Menu state
  const [menuVisible, setMenuVisible] = useState(false);

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

  const navigation = useNavigation();

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
  // Después: un Record genérico string→string
  const [healthInfo, setHealthInfo] = useState<Record<string, string>>(
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
        {/* Contenedor relativo para header + menú */}
        <View style={styles.headerWrapper}>
          {/* Tu header original */}
          <View style={styles.headerWrapper}>
            <View style={tw`flex-row justify-between items-center mx-4 mt-8`}>
              <Breadcrumb
                items={[
                  { label: "Home" },
                  { label: "Monitoring" },
                  { label: "Susana Mejía" },
                ]}
              />
              <Pressable hitSlop={8} onPress={() => setMenuVisible((v) => !v)}>
                <MaterialIcons
                  name="menu"
                  size={24}
                  style={tw`text-gray-700`}
                  accessibilityLabel="Abrir menú"
                />
              </Pressable>
            </View>

            {/* Dropdown posicionado dentro de ese wrapper */}
            {menuVisible && (
              <View style={styles.dropdown}>
                {["Element 1", "Element 2", "Element 3"].map((el) => (
                  <Pressable
                    key={el}
                    onPress={() => {
                      Alert.alert(el);
                      setMenuVisible(false);
                    }}
                    style={tw`py-2 px-4 border-b border-gray-200`}
                    hitSlop={8}
                  >
                    <Text>{el}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* User card */}
        <LinearGradient
          // Aquí van los colores explícitos
          colors={["#CCCCFF", "#94c9E4", "#6EE7B7"]}
          start={[0, 0]}
          end={[1, 1]}
          // Usamos twrnc para padding, margen y borderRadius
          style={tw`rounded-lg mx-4 mt-2 p-4`}
        >
          <Text style={tw`text-black font-semibold text-base`}>
            Susana Mejía Echeverry
          </Text>
          <View style={tw`flex-row justify-between mt-3`}>
            <Text style={tw`text-black text-sm`}>30/07/1943</Text>
            <Text style={tw`text-black text-sm`}>Alcohol: Moderate</Text>
          </View>
          <View style={tw`flex-row justify-between mt-1`}>
            <Text style={tw`text-black text-sm`}>Sura</Text>
            <Text style={tw`text-black text-sm`}>Smoke: Never</Text>
          </View>
        </LinearGradient>

        {/* Health information header */}
        <View style={tw`mx-4 mt-6 mb-2 flex-row items-center`}>
          {/* Título centrado y un poco más grande */}
          <Text style={tw`flex-1 text-lg font-bold text-center`}>
            Health information
          </Text>
          {/* Botón azul con texto blanco */}
          <Pressable
            onPress={() => setHealthModalVisible(true)}
            style={tw`bg-blue-600 px-4 py-1 rounded-full`}
            hitSlop={8}
          >
            <Text style={tw`text-white font-medium`}>Edit</Text>
          </Pressable>
        </View>

        {/* Tab strips */}
        <View style={tw`flex-row mx-4 mb-2`}>
          {sections.map((sec) => (
            <Pressable
              key={sec.key}
              onPress={() => setActiveTab(sec.key)}
              style={tw`flex-1 items-center py-2`}
              hitSlop={8}
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

        {/* Active tab content */}
        <View style={tw`bg-white mx-4 p-4 rounded-xl mb-4 shadow`}>
          <View style={tw`flex-row items-start`}>
            <MaterialCommunityIcons
              name="stethoscope"
              size={62} // antes 24, ahora 32
              style={tw`text-gray-700 mr-4`} // margen derecho un pelín mayor
            />
            <View style={{ flex: 1, maxHeight: 120 }}>
              <ScrollView nestedScrollEnabled>
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
        <View style={tw`mx-4 mt-4 mb-2`}>
          <Text style={tw`text-base font-bold text-center`}>Recent Events</Text>
        </View>

        {/* Recent Events 4-columnas */}
        <View style={tw`mx-4 bg-white rounded-xl overflow-hidden shadow`}>
          {events.map((e: Event) => (
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

const styles = StyleSheet.create({
  headerWrapper: {
    position: "relative",
    marginBottom: 8,
  },
  dropdown: {
    position: "absolute",
    top: 56, // ajusta si lo necesitas
    right: 16, // coincide con mx-4 = 16px
    width: "92%",
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 20,
  },
});
