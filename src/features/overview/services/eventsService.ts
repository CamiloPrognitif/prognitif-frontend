// src/services/eventsService.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Event } from "../../../types";

const STORAGE_KEY = "prognitif:events";

/**
 * Retrieves the list of events from persistent storage.
 */
export async function getEvents(): Promise<Event[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Error reading events from storage", error);
    return [];
  }
}

/**
 * Persists the given list of events.
 */
export async function saveEvents(events: Event[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (error) {
    console.error("Error saving events to storage", error);
  }
}
