// src/components/HealthInfoModal.tsx
import React from "react";
import { Modal, View, Text, Pressable, TextInput } from "react-native";
import tw from "twrnc";

interface HealthInfoModalProps {
  visible: boolean;
  data: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onSave: () => void;
  onClose: () => void;
}

export default function HealthInfoModal({
  visible,
  data,
  onChange,
  onSave,
  onClose,
}: HealthInfoModalProps) {
  const tabs = Object.keys(data);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={tw`flex-1 bg-black bg-opacity-30 justify-end`}>
        <View style={tw`bg-white p-6 rounded-t-xl flex-1`}>
          <Text style={tw`text-lg font-semibold mb-4`}>
            Edit Health Information
          </Text>
          {tabs.map((key) => (
            <TextInput
              key={key}
              value={data[key]}
              onChangeText={(t) => onChange(key, t)}
              placeholder={key}
              multiline
              style={tw`border border-gray-300 rounded-xl px-4 py-3 mb-4 h-24`}
            />
          ))}
          <View style={tw`flex-row justify-between`}>
            <Pressable
              onPress={onClose}
              style={tw`flex-1 mr-2 bg-gray-200 rounded-xl py-3 items-center`}
            >
              <Text style={tw`text-gray-700`}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={onSave}
              style={tw`flex-1 ml-2 bg-blue-500 rounded-xl py-3 items-center`}
            >
              <Text style={tw`text-white`}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
