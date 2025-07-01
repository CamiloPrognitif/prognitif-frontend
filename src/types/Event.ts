// /src/types/Event.ts
export interface Event {
  id: string;
  label: string;
  type: "stress" | "warning" | string;
  date: string;
  time: string;
  viewed: boolean;
}
