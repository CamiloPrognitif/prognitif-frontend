import AsyncStorage from "@react-native-async-storage/async-storage";
import { SECTIONS } from "@constants";

const STORAGE_KEY = "healthInfo";

// Devuelve los datos guardados o los defaults de SECTIONS
export async function getHealthInfo(): Promise<Record<string, string>> {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  if (json) return JSON.parse(json);
  return Object.fromEntries(SECTIONS.map((s) => [s.key, s.text]));
}

// Guarda el objeto completo
export async function saveHealthInfo(
  data: Record<string, string>
): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
