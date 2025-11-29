import React from "react";
import type { FilterType } from "../type/team";

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const filters: FilterType[] = ["all", "available", "busy", "offline"];

  return (
    <div className="filterbar">
      <div className="filtertext">Filter by Status</div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border:
                currentFilter === filter
                  ? "2px solid #292929"
                  : "2px solid #e5e7eb",
              background: currentFilter === filter ? "#292929" : "white",
              color: currentFilter === filter ? "white" : "#374151",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s",
              textTransform: "capitalize",
            }}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};
