import React from "react";
import "../css/Search.css";

function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={e => props.setSearchValue(e.target.value)}
        value={props.value}
        placeholder="Search for movies..."
      />
    </div>
  );
}

export default Search;
