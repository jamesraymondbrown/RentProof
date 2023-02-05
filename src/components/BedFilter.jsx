import React, { useState } from "react";

import "./BedFilter.scss";

export default function BedFilter() {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleClick = (index) => {
    if (selectedButtons.includes(index)) {
      setSelectedButtons(selectedButtons.filter((i) => i !== index));
    } else {
      setSelectedButtons([...selectedButtons, index]);
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-row">
        <div className="filter-right">
          <div className="filter-label">Bedrooms</div>
          <div className="filter-wrap">
            <div className="filter">
              <div className="row filter-bedrooms">
                <button
                  className={`filter-button ${selectedButtons.includes(0) ? 'selected' : ''}`}
                  onClick={() => handleClick(0)}
                >
                  Studio
                </button>
                <button
                  className={`filter-button ${selectedButtons.includes(1) ? 'selected' : ''}`}
                  onClick={() => handleClick(1)}
                >
                  1
                </button>
                <button
                  className={`filter-button ${selectedButtons.includes(2) ? 'selected' : ''}`}
                  onClick={() => handleClick(2)}
                >
                  2
                </button>
                <button
                  className={`filter-button ${selectedButtons.includes(3) ? 'selected' : ''}`}
                  onClick={() => handleClick(3)}
                >
                  3
                </button>
                <button
                  className={`filter-button ${selectedButtons.includes(4) ? 'selected' : ''}`}
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
