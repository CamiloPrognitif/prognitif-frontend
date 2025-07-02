import React, { useState, useEffect } from "react";
import { Modal, View, Text, Pressable, TextInput } from "react-native";
import tw from "twrnc";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";

import type { Event } from "@types";

interface ModalFormProps {
  isVisible: boolean;
  event?: Event;
  onSave: (e: Event) => void;
  onClose: () => void;
}

export default function ModalForm({
  isVisible,
  event,
  onSave,
  onClose,
}: ModalFormProps) {
  // --- Local state ---
  const [label, setLabel] = useState(event?.label ?? "");
  const [date, setDate] = useState(event?.date ?? "");
  const [time, setTime] = useState(event?.time ?? "");

  // Picker visibility
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Cada vez que cambie `event`, reseteamos los campos:
  useEffect(() => {
    setLabel(event?.label ?? "");
    setDate(event?.date ?? "");
    setTime(event?.time ?? "");
  }, [event]);

  // --- Handlers ---
  const handleSubmit = () => {
    const newEvent: Event = {
      id: event?.id ?? Date.now().toString(),
      label,
      date,
      time,
      type: "warning", // ajusta según tu lógica de tipos
      viewed: false,
    };
    onSave(newEvent);
    onClose();
  };

  // Detecta si la fecha `d` es hoy, devuelve “Today” o YYYY-MM-DD
  const formatDate = (d: Date) => {
    const t = new Date();
    if (
      d.getFullYear() === t.getFullYear() &&
      d.getMonth() === t.getMonth() &&
      d.getDate() === t.getDate()
    ) {
      return "Today";
    }
    return d.toISOString().slice(0, 10);
  };

  // Formatea hora a HH:MM
  const formatTime = (d: Date) =>
    `${d.getHours().toString().padStart(2, "0")}:${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={tw`flex-1 bg-black bg-opacity-30 justify-end`}>
        <View style={tw`bg-white p-6 rounded-t-xl w-full`}>
          <Text style={tw`text-lg font-semibold mb-4`}>
            {event ? "Edit Event" : "Add Event"}
          </Text>

          {/* Label */}
          <TextInput
            placeholder="Label"
            value={label}
            onChangeText={setLabel}
            style={tw`border border-gray-300 rounded-xl px-4 h-14 mb-3`}
          />

          {/* Fecha selector */}
          <Pressable
            onPress={() => setShowDatePicker(true)}
            style={tw`flex-row items-center border border-gray-300 rounded-xl px-4 h-14 mb-3`}
          >
            <MaterialIcons
              name="calendar-today"
              size={20}
              style={tw`text-gray-500`}
            />
            <Text style={tw`ml-2 text-gray-700`}>{date || "Select date"}</Text>
          </Pressable>

          {/* Hora selector */}
          <Pressable
            onPress={() => setShowTimePicker(true)}
            style={tw`flex-row items-center border border-gray-300 rounded-xl px-4 h-14 mb-6`}
          >
            <MaterialIcons
              name="access-time"
              size={20}
              style={tw`text-gray-500`}
            />
            <Text style={tw`ml-2 text-gray-700`}>{time || "Select time"}</Text>
          </Pressable>

          {/* Botones Cancel / Save */}
          <View style={tw`flex-row justify-between`}>
            <Pressable
              onPress={onClose}
              style={tw`flex-1 mr-2 bg-gray-200 rounded-xl py-3 items-center`}
            >
              <Text style={tw`text-gray-700`}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={handleSubmit}
              style={tw`flex-1 ml-2 bg-blue-500 rounded-xl py-3 items-center`}
            >
              <Text style={tw`text-white`}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Picker de fecha */}
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={(d) => {
          setDate(formatDate(d));
          setShowDatePicker(false);
        }}
        onCancel={() => setShowDatePicker(false)}
      />

      {/* Picker de hora */}
      <DateTimePickerModal
        isVisible={showTimePicker}
        mode="time"
        onConfirm={(d) => {
          setTime(formatTime(d));
          setShowTimePicker(false);
        }}
        onCancel={() => setShowTimePicker(false)}
      />
    </Modal>
  );
}
