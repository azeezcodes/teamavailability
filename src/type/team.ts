export type AvailabilityStatus = "available" | "busy" | "offline";
export type FilterType = "all" | "available" | "busy" | "offline";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: AvailabilityStatus;
  tasksCompleted: number;
  returnTime?: string;
}
