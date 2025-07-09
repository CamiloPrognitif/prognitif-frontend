import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { InputField } from "./components/InputField";
import { AuthButton } from "./components/AuthButton";
import { useAuth } from "./hooks/useAuth";

export const AuthScreen: React.FC = () => {
  const nav: any = useNavigation();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = () => {
    const errs: typeof errors = {};
    if (!email) errs.email = "Requerido";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Email inválido";
    if (!password) errs.password = "Requerido";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async () => {
    if (!validate()) return;
    try {
      await auth.mutateAsync({ email, password });
      // @ts-ignore
      nav.reset({ index: 0, routes: [{ name: "CareGroups" }] });
    } catch {
      setErrors({ password: "Credenciales incorrectas" });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      {/* Logo + tagline */}
      <View style={{ alignItems: "center", marginTop: 80, marginBottom: 32 }}>
        <Image
          source={require("../../../assets/logo.png")}
          style={{ width: 400, height: 160 }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontFamily: "DM_Sans_500Medium",
            fontSize: 20,
            lineHeight: 26,
            color: "#000",
            marginTop: 4,
          }}
        >
          Letting your body speak
        </Text>
      </View>

      {/* Card de login */}

      <View
        style={{
          width: "100%",
          maxWidth: 390,
          backgroundColor: "transparent",
          borderRadius: 24,
          padding: 24,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#000",
            alignSelf: "flex-start",
            marginBottom: 20,
          }}
        >
          Sign In
        </Text>

        <InputField
          placeholder="Email"
          value={email}
          onChange={setEmail}
          error={errors.email}
        />
        <InputField
          placeholder="Password"
          secureTextEntry
          value={password}
          onChange={setPassword}
          error={errors.password}
        />

        {/* Botón principal */}
        <AuthButton
          title="Log In"
          onPress={onSubmit}
          loading={auth.status === "pending"}
          style={{ width: "50%" }}
        />

        {/* Texto previo a Register */}
        <Text style={{ fontSize: 14, color: "#49454F", marginTop: 100 }}>
          Need an account?
        </Text>

        {/* Botón secundario “Register now” */}
        <View style={{ width: "50%", marginTop: 5 }}>
          <AuthButton
            title="Register now"
            onPress={() => nav.navigate("Register" as any)}
            loading={false}
          />
        </View>
      </View>
    </View>
  );
};
export default AuthScreen;
