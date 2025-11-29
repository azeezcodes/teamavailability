

import { useState, useMemo } from "react";
 import "./App.css";
import { initialTeamMembers } from "./data/initialData";
import { Summary } from "./components/Summary";
import { FilterBar } from "./components/FilterBar";
import { TeamList } from "./components/TeamList";
import { useLocalStorage } from "./hook/useLocalStorage";
import type { AvailabilityStatus, FilterType, TeamMember } from "./type/team";

function App() {
 const [teamMembers, setTeamMembers] = useLocalStorage<TeamMember[]>(
   "teamMembers",
   initialTeamMembers
 );
 const [filter, setFilter] = useState<FilterType>("all");

 const filteredMembers = useMemo(() => {
   if (filter === "all") return teamMembers;
   return teamMembers.filter((member) => member.status === filter);
 }, [teamMembers, filter]);

 const summary = useMemo(() => {
   return teamMembers.reduce(
     (acc, member) => {
       acc[member.status]++;
       return acc;
     },
     { available: 0, busy: 0, offline: 0 }
   );
 }, [teamMembers]);

 const changeStatus = (id: string, newStatus: AvailabilityStatus): void => {
   setTeamMembers(
     teamMembers.map((member: TeamMember): TeamMember => {
       if (member.id !== id) return member;

       const currentStatus = member.status;

       const updatedMember: TeamMember = {
         ...member,
         status: newStatus,
       };

       if (currentStatus === "offline" && newStatus === "available") {
         updatedMember.returnTime = new Date().toLocaleTimeString();
       }

       if (currentStatus === "busy" && newStatus === "available") {
         updatedMember.tasksCompleted = member.tasksCompleted + 1;
       }

       return updatedMember;
     })
   );
 };

  return (
    <div className="allbody">
      <div className="centerPage">
        <h1 className="head">Team Availability Dashboard</h1>
        <p className="subhead">
          Manage your team's real-time availability status
        </p>
        <Summary
          available={summary.available}
          busy={summary.busy}
          offline={summary.offline}
        />
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
        <TeamList
          members={filteredMembers}
          onStatusChange={changeStatus}
        />{" "}
      </div>
    </div>
  );
}

export default App;
