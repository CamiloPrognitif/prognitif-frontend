import api from "../../../api/axiosClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Credentials {
  email: string;
  password: string;
}

export async function loginService(creds: Credentials) {
  // 🔜 Reemplazar por tu endpoint real: return api.post('/auth/login', creds)
  // Mock temporal:
  await new Promise((res) => setTimeout(res, 1000));
  const fakeToken = "eyJhbGciOi…";
  await AsyncStorage.setItem("authToken", fakeToken);
  return { token: fakeToken };
}
