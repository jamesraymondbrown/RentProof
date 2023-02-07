import React, { useContext } from "react";
import { AppDataContext } from "../providers/AppDataProvider";

export default function BedFilter() {
  const { state, handleClick } = useContext(AppDataContext);
  const bedrooms = [0, 1, 2, 3, 4];

  return (
    <div className="filter-container">
      <div className="filter-row">
        <div className="filter-right">
          <div className="filter-label">Bedrooms</div>
          <div className="filter-wrap">
            <div className="filter">
              <div className="row filter-bedrooms">
                {bedrooms.map((bedrooms) => (
                  <button
                    key={bedrooms}
                    className={`filter-button ${
                      state.bedrooms.includes(bedrooms) ? "selected" : ""
                    }`}
                    onClick={() => handleClick(bedrooms)}
                  >
                    {bedrooms === 0 ? "Studio" : bedrooms}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
