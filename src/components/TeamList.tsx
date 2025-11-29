import React from "react";
import { TeamMemberCard } from "./TeamMemberCard";
import type { AvailabilityStatus, TeamMember } from "../type/team";

interface TeamListProps {
  members: TeamMember[];
  onStatusChange: (id: string, newStatus: AvailabilityStatus) => void;
}

export const TeamList: React.FC<TeamListProps> = ({
  members,
  onStatusChange,
}) => {
  if (members.length === 0) {
    return (
      <div className="noTeamMembers">
        No team members match the current filter.
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {members.map((member) => (
        <TeamMemberCard
          key={member.id}
          member={member}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};
