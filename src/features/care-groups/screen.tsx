// src/features/care-groups/screen.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { RootStackParamList } from "../../navigation";

type CareNavProp = NativeStackNavigationProp<RootStackParamList, "CareGroups">;

const DUMMY_GROUPS = [
  { id: "1", name: "Susana Mejía Echeverry" },
  { id: "2", name: "Jorge Alfredo Villegas" },
];

const CareGroupsScreen: React.FC = () => {
  const navigation = useNavigation<CareNavProp>();

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-xl font-bold mb-4`}>Your Care Groups:</Text>
      <FlatList
        data={DUMMY_GROUPS}
        keyExtractor={(g) => g.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`bg-white rounded-xl p-4 mb-2 shadow`}
            onPress={() =>
              navigation.navigate("Overview", {
                careGroupId: item.id,
                careGroupName: item.name,
              })
            }
          >
            <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CareGroupsScreen;
