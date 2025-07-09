// src/features/care-groups/screen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import { RootStackParamList } from "../../navigation";

type CareNavProp = NativeStackNavigationProp<RootStackParamList, "CareGroups">;

interface CareGroup {
  id: string;
  name: string;
  gender: "Man" | "Woman";
  birthDate: string;
  careCenter: string;
  alcoholLevel: string;
  smokeFrequency: string;
}

const initialGroups: CareGroup[] = [
  {
    id: "1",
    name: "Susana Mejía Echeverry",
    gender: "Woman",
    birthDate: "30/07/1943",
    careCenter: "Sura",
    alcoholLevel: "Moderate",
    smokeFrequency: "Never",
  },
  {
    id: "2",
    name: "Jorge Alfredo Villegas",
    gender: "Man",
    birthDate: "12/11/1942",
    careCenter: "Clinica X",
    alcoholLevel: "Low",
    smokeFrequency: "Occasional",
  },
];

export default function CareGroupsScreen() {
  const navigation = useNavigation<CareNavProp>();
  const [groups, setGroups] = useState<CareGroup[]>(initialGroups);

  // Modal de creación
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newGender, setNewGender] = useState<"Man" | "Woman" | "">("");
  const [newBirthDate, setNewBirthDate] = useState(""); // DD/MM/YYYY
  const [newCareCenter, setNewCareCenter] = useState("");
  const [newAlcohol, setNewAlcohol] = useState(""); // None, Low, Moderate, High
  const [newSmoke, setNewSmoke] = useState(""); // Never, Occasional, Daily

  // Modal de confirmación de leave
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingLeaveId, setPendingLeaveId] = useState<string | null>(null);

  const onPressLeave = (id: string) => {
    setPendingLeaveId(id);
    setShowConfirm(true);
  };
  const confirmLeave = () => {
    if (pendingLeaveId) {
      setGroups((gs) => gs.filter((g) => g.id !== pendingLeaveId));
      Alert.alert("You have left the group");
    }
    setShowConfirm(false);
    setPendingLeaveId(null);
  };

  const createGroup = () => {
    if (
      !newName.trim() ||
      !newGender ||
      !newBirthDate.trim() ||
      !newCareCenter.trim() ||
      !newAlcohol ||
      !newSmoke
    ) {
      return Alert.alert("Por favor completa todos los campos");
    }
    const g: CareGroup = {
      id: Date.now().toString(),
      name: newName.trim(),
      gender: newGender,
      birthDate: newBirthDate.trim(),
      careCenter: newCareCenter.trim(),
      alcoholLevel: newAlcohol,
      smokeFrequency: newSmoke,
    };
    setGroups((gs) => [g, ...gs]);
    // reset form
    setNewName("");
    setNewGender("");
    setNewBirthDate("");
    setNewCareCenter("");
    setNewAlcohol("");
    setNewSmoke("");
    setShowCreate(false);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header de ondas */}
      <Image
        source={require("../../../assets/wavesTop.png")}
        style={tw`w-full h-40`}
        resizeMode="cover"
      />

      <Text style={tw`text-center text-xl font-semibold mt-4 mb-2`}>
        Welcome, Andrés
      </Text>
      <Text style={tw`text-base ml-4 mb-4`}>Your Care Groups:</Text>

      {/* Lista de grupos */}
      <FlatList
        data={groups}
        keyExtractor={(g) => g.id}
        contentContainerStyle={tw`px-4`}
        renderItem={({ item }) => (
          <View
            style={[
              tw`bg-white rounded-2xl p-4 mb-4 flex-row items-center`,
              { elevation: 2 },
            ]}
          >
            <TouchableOpacity
              style={tw`flex-1 flex-row items-center`}
              onPress={() =>
                navigation.navigate("Overview", {
                  careGroupId: item.id,
                  careGroupName: item.name,
                  birthDate: item.birthDate,
                  careCenter: item.careCenter,
                  alcoholLevel: item.alcoholLevel,
                  smokeFrequency: item.smokeFrequency,
                })
              }
            >
              <View style={tw`bg-purple-100 rounded-full p-2`}>
                <MaterialIcons name="person" size={32} color="#993BFC" />
              </View>
              <View style={tw`ml-4 flex-1`}>
                <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
                <Text style={tw`text-sm text-gray-500`}>
                  {item.gender}, {item.birthDate}
                </Text>
                <Text style={tw`text-sm text-gray-500`}>{item.careCenter}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressLeave(item.id)}
              style={tw`p-2 ml-2`}
            >
              <MaterialIcons name="logout" size={24} color="#ef4444" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Botón Agregar Care Group */}
      <TouchableOpacity
        style={tw`flex-row items-center justify-center mx-4 mb-6 border border-gray-300 rounded-xl h-12`}
        onPress={() => setShowCreate(true)}
      >
        <MaterialIcons name="add" size={24} color="#6B7280" />
        <Text style={tw`ml-2 text-gray-500`}>Add Care Group</Text>
      </TouchableOpacity>

      {/* Modal de creación */}
      <Modal visible={showCreate} transparent animationType="slide">
        <View style={tw`flex-1 justify-center bg-black bg-opacity-50 p-4`}>
          <View style={tw`bg-white rounded-2xl p-6`}>
            <Text style={tw`text-xl font-semibold mb-4`}>
              Create Care Group
            </Text>

            {/* Name */}
            <TextInput
              placeholder="Name"
              value={newName}
              onChangeText={setNewName}
              style={tw`border border-gray-300 rounded-lg px-4 py-2 mb-4`}
            />

            {/* Birth Date */}
            <TextInput
              placeholder="Birth Date (DD/MM/YYYY)"
              value={newBirthDate}
              onChangeText={setNewBirthDate}
              style={tw`border border-gray-300 rounded-lg px-4 py-2 mb-4`}
            />

            {/* Care Center */}
            <TextInput
              placeholder="Care Center"
              value={newCareCenter}
              onChangeText={setNewCareCenter}
              style={tw`border border-gray-300 rounded-lg px-4 py-2 mb-4`}
            />

            {/* Gender */}
            <View style={tw`border border-gray-300 rounded-lg mb-4 px-3 py-1`}>
              <Picker
                selectedValue={newGender}
                onValueChange={(v) => setNewGender(v)}
                style={tw`h-14`}
              >
                <Picker.Item label="Select Gender…" value="" />
                <Picker.Item label="Man" value="Man" />
                <Picker.Item label="Woman" value="Woman" />
              </Picker>
            </View>

            {/* Alcohol Level */}
            <View style={tw`border border-gray-300 rounded-lg mb-4 px-3 py-1`}>
              <Picker
                selectedValue={newAlcohol}
                onValueChange={(v) => setNewAlcohol(v)}
                style={tw`h-14`}
              >
                <Picker.Item label="Alcohol Level…" value="" />
                <Picker.Item label="None" value="None" />
                <Picker.Item label="Low" value="Low" />
                <Picker.Item label="Moderate" value="Moderate" />
                <Picker.Item label="High" value="High" />
              </Picker>
            </View>

            {/* Smoke Frequency */}
            <View style={tw`border border-gray-300 rounded-lg mb-6 px-3 py-1`}>
              <Picker
                selectedValue={newSmoke}
                onValueChange={(v) => setNewSmoke(v)}
                style={tw`h-14`}
              >
                <Picker.Item label="Smoke Frequency…" value="" />
                <Picker.Item label="Never" value="Never" />
                <Picker.Item label="Occasional" value="Occasional" />
                <Picker.Item label="Daily" value="Daily" />
              </Picker>
            </View>

            <TouchableOpacity
              onPress={createGroup}
              style={[
                tw`w-full h-12 rounded-full justify-center items-center mb-2`,
                { backgroundColor: "#99B3F6" },
              ]}
            >
              <Text style={tw`text-white text-base font-medium`}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowCreate(false)}
              style={tw`w-full h-12 rounded-full justify-center items-center border border-gray-300`}
            >
              <Text style={tw`text-gray-500 text-base`}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Confirm Leave Modal */}
      <Modal visible={showConfirm} transparent animationType="fade">
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View
            style={[
              tw`bg-white p-6 rounded-xl w-11/12`,
              { borderColor: "#ef4444", borderWidth: 2 },
            ]}
          >
            <View style={tw`flex-row items-center mb-4`}>
              <MaterialIcons
                name="warning"
                size={24}
                color="#ef4444"
                style={tw`mr-2`}
              />
              <Text style={tw`text-lg font-semibold`}>
                Are you sure you want to leave this group?
              </Text>
            </View>
            <View style={tw`flex-row justify-center space-x-4`}>
              <TouchableOpacity
                onPress={confirmLeave}
                style={[
                  tw`flex-1 h-12 rounded-full justify-center items-center`,
                  { backgroundColor: "#99B3F6" },
                ]}
              >
                <Text style={tw`text-white font-medium`}>Leave</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowConfirm(false)}
                style={[
                  tw`flex-1 h-12 rounded-full justify-center items-center border`,
                  { borderColor: "#99B3F6" },
                ]}
              >
                <Text style={tw`text-[#99B3F6] font-medium`}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
