import React from "react";
import "./BedFilter.scss";
import { useAppData } from "../hooks/useAppData";

export default function BedFilter() {
  const { state, handleClick } = useAppData();
// console.log("state ➤", state);
  return (
    <div className="filter-container">
      <div className="filter-row">
        <div className="filter-right">
          <div className="filter-label">Bedrooms</div>
          <div className="filter-wrap">
            <div className="filter">
              <div className="row filter-bedrooms">
                <button
                  className={`filter-button ${
                    state.bedrooms.includes(0) ? "selected" : ""
                  }`}
                  onClick={() => handleClick(0)}
                >
                  Studio
                </button>
                <button
                  className={`filter-button ${
                    state.bedrooms.includes(1) ? "selected" : ""
                  }`}
                  onClick={() => handleClick(1)}
                >
                  1
                </button>
                <button
                  className={`filter-button ${
                    state.bedrooms.includes(2) ? "selected" : ""
                  }`}
                  onClick={() => handleClick(2)}
                >
                  2
                </button>
                <button
                  className={`filter-button ${
                    state.bedrooms.includes(3) ? "selected" : ""
                  }`}
                  onClick={() => handleClick(3)}
                >
                  3
                </button>
                <button
                  className={`filter-button ${
                    state.bedrooms.includes(4) ? "selected" : ""
                  }`}
                  onClick={() => handleClick(4)}
                >
                  4+
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}