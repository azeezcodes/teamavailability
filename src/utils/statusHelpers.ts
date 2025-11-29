import type { AvailabilityStatus } from "../type/team";

export const getStatusColor = (status: AvailabilityStatus): string => {
  switch (status) {
    case "available":
      return "#10b981";
    case "busy":
      return "#f59e0b";
    case "offline":
      return "#6b7280";
  }
};

export const getNextStatus = (status: AvailabilityStatus): string => {
  switch (status) {
    case "available":
      return "Set Busy";
    case "busy":
      return "Set Offline";
    case "offline":
      return "Set Available";
  }
};

export const getNextStatusValue = (
  status: AvailabilityStatus
): AvailabilityStatus => {
  switch (status) {
    case "available":
      return "busy";
    case "busy":
      return "offline";
    case "offline":
      return "available";
  }
};
