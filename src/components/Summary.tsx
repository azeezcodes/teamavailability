import React from "react";
import { SummaryCard } from "./SummaryCard";

interface SummaryProps {
  available: number;
  busy: number;
  offline: number;
}

export const Summary: React.FC<SummaryProps> = ({
  available,
  busy,
  offline,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <SummaryCard label="Available" count={available}/>
      <SummaryCard label="Busy" count={busy} />
      <SummaryCard label="Offline" count={offline} />
    </div>
  );
};
