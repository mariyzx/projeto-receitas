import React from "react";
import { SearchInputs } from "../styles/Header";

function SearchBar() {
  return (
    <SearchInputs className="form-check">
      <input type='text' placeholder="Search..." />
      <label className="form-check-label">
        <input type='checkbox' className="form-check-input"  />
        Ingredients
      </label>
      <label className="form-check-label">
        <input type='checkbox' className="form-check-input" />
        Name
      </label>
      <label className="form-check-label">
        <input type='checkbox' className="form-check-input" />
        First letter
      </label>
    </SearchInputs>
  )
}

export default SearchBar;