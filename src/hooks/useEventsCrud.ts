// src/hooks/useEventsCrud.ts
import { useState, useEffect, useCallback } from "react";
import { getEvents, saveEvents } from "./../services/eventsService";
import { Event } from "../types/Event";

export default function useEventsCrud() {
  const [events, setEvents] = useState<Event[]>([]);

  // Load on mount
  useEffect(() => {
    getEvents().then(setEvents).catch(console.error);
  }, []);

  const addEvent = useCallback(
    (e: Event) => {
      const next = [...events, e];
      setEvents(next);
      return saveEvents(next);
    },
    [events]
  );

  const updateEvent = useCallback(
    (updated: Event) => {
      const next = events.map((e) => (e.id === updated.id ? updated : e));
      setEvents(next);
      return saveEvents(next);
    },
    [events]
  );

  const toggleViewed = useCallback(
    (id: string) => {
      const next = events.map((e) =>
        e.id === id ? { ...e, viewed: !e.viewed } : e
      );
      setEvents(next);
      return saveEvents(next);
    },
    [events]
  );

  const removeEvent = useCallback(
    (id: string) => {
      const next = events.filter((e) => e.id !== id);
      setEvents(next);
      return saveEvents(next);
    },
    [events]
  );

  return { events, addEvent, updateEvent, toggleViewed, removeEvent };
}
