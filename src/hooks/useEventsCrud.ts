// src/hooks/useEventsCrud.ts
import { useState, useEffect, useCallback } from "react";
import { getEvents, saveEvents } from "@services/eventsService";
import type { Event } from "@types";

export function useEventsCrud() {
  const [events, setEvents] = useState<Event[]>([]);

  // Carga inicial desde el service
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
      const next = events.map((ev) => (ev.id === updated.id ? updated : ev));
      setEvents(next);
      return saveEvents(next);
    },
    [events]
  );

  const toggleViewed = useCallback(
    (id: string) => {
      const next = events.map((ev) =>
        ev.id === id ? { ...ev, viewed: !ev.viewed } : ev
      );
      setEvents(next);
      return saveEvents(next);
    },
    [events]
  );

  const removeEvent = useCallback(
    (id: string) => {
      const next = events.filter((ev) => ev.id !== id);
      setEvents(next);
      return saveEvents(next);
    },
    [events]
  );

  return { events, addEvent, updateEvent, toggleViewed, removeEvent };
}
