import React, { useState } from "react";
import axios from "axios";

const TopBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      const response = await axios.get(`/search?q=${searchTerm}`);
      console.log(response.data);
    }
  };

  return (
    <div style={{ height: "10%", background: "lightgray" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
      />
    </div>
  );
};

export default TopBar;