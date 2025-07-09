import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const AuthButton: React.FC<Props> = ({
  title,
  onPress,
  loading = false,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={loading}
    style={[
      {
        width: "100%",
        backgroundColor: "rgba(153, 179, 246, 0.7)", // ← semitransparente
        borderRadius: 24,
        paddingVertical: 14,
        alignItems: "center",
        opacity: loading ? 0.7 : 1,
        marginTop: 8,
      },
      style,
    ]}
  >
    {loading ? (
      <ActivityIndicator color="#FFF" />
    ) : (
      <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}>
        {title}
      </Text>
    )}
  </TouchableOpacity>
);
