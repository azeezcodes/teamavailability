import React from "react";

interface SummaryCardProps {
  label: string;
  count: number;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  label,
  count,
}) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#6b7280",
          marginBottom: "8px",
          fontWeight: "600",
        }}
      >
        {label}
      </div>
      <div className="countText">{count}</div>
    </div>
  );
};
