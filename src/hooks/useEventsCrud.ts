// src/hooks/useEventsCrud.ts
import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Event } from "../components/EventList"; // usa tu tipo Event

const STORAGE_KEY = "prognitif:events";

export default function useEventsCrud() {
  const [events, setEvents] = useState<Event[]>([]);

  // Carga inicial
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) setEvents(JSON.parse(raw));
      })
      .catch(console.error);
  }, []);

  // Función para persistir
  const persist = useCallback((newEvents: Event[]) => {
    setEvents(newEvents);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newEvents)).catch(
      console.error
    );
  }, []);

  return {
    events,
    addEvent: (e: Event) => persist([...events, e]),
    updateEvent: (updated: Event) =>
      persist(events.map((e) => (e.id === updated.id ? updated : e))),
    toggleViewed: (id: string) =>
      persist(
        events.map((e) => (e.id === id ? { ...e, viewed: !e.viewed } : e))
      ),
    removeEvent: (id: string) => persist(events.filter((e) => e.id !== id)),
  };
}
