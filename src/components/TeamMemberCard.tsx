import React from "react";
import { getStatusColor } from "../utils/statusHelpers";
import type { TeamMember, AvailabilityStatus } from "../type/team";

interface TeamMemberCardProps {
  member: TeamMember;
  onStatusChange: (id: string, newStatus: AvailabilityStatus) => void;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  onStatusChange,
}) => {

  const allStatuses: AvailabilityStatus[] = ["available", "busy", "offline"];
  const availableStatuses = allStatuses.filter(
    (status) => status !== member.status
  );

  const getButtonColor = (status: AvailabilityStatus): string => {
    switch (status) {
      case "available":
        return "#10b981";
      case "busy":
        return "#f59e0b";
      case "offline":
        return "#6b7280";
    }
  };
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <div style={{ flex: "1", minWidth: "200px" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#111827",
            marginBottom: "6px",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginBottom: "12px",
          }}
        >
          {member.role}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "20px",
              background: `${getStatusColor(member.status)}20`,
              color: getStatusColor(member.status),
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: getStatusColor(member.status),
              }}
            />
            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
          </span>
          {member.tasksCompleted > 0 && (
            <span style={{ fontSize: "13px", color: "#6b7280" }}>
              Tasks: {member.tasksCompleted}
            </span>
          )}
          {member.returnTime && (
            <span style={{ fontSize: "13px", color: "#6b7280" }}>
              Returned: {member.returnTime}
            </span>
          )}
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {availableStatuses.map((status) => (
          <button
            key={status}
            onClick={() => onStatusChange(member.id, status)}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              background: getButtonColor(status),
              color: "white",
              fontWeight: "600",
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              textTransform: "capitalize",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Set {status}
          </button>
        ))}
      </div>
    </div>
  );
};
