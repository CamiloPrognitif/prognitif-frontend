import React from "react";
import { View, TextInput, Text, StyleProp, ViewStyle } from "react-native";

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChange: (t: string) => void;
  error?: string;
  style?: StyleProp<ViewStyle>;
}

export const InputField: React.FC<Props> = ({
  placeholder,
  secureTextEntry = false,
  value,
  onChange,
  error,
  style,
}) => (
  <View style={[{ width: "100%", marginBottom: 16 }, style]}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#CAC4D0"
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChange}
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: "#CAC4D0",
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize: 16,
        lineHeight: 22,
        color: "#000",
        backgroundColor: "transparent", // ← transparente
      }}
    />
    {error && (
      <Text style={{ color: "red", marginTop: 4, fontSize: 14 }}>{error}</Text>
    )}
  </View>
);
