import React from "react";
import "./BathFilter.scss";
import { useAppData } from "../hooks/useAppData";

export default function BathFilter() {
  const { state, handleClick } = useAppData();
// console.log("state ➤", state);


  return (
    <div className="filter-container">
      <div className="filter-row">
        <div className="filter-right">
          <div className="filter-label">Bathrooms</div>
          <div className="filter-wrap">
            <div className="filter">
              <div className="row filter-bathrooms">
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
                  3+
                </button>
                      {/* <div className="element1" >Hello World 1</div>
                      <div className="element2" >Hello World 2</div>
                      <div className="element3" >Hello World 3</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}