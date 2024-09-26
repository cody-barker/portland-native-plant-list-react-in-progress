import React from "react";

const SearchInput = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

function Search({ biSearch, comSearch, handleSearchChange }) {
  return (
    <form>
      <SearchInput
        value={biSearch}
        onChange={(e) => handleSearchChange(e, "bi")}
        placeholder="Search by Binomial Name"
      />
      <SearchInput
        value={comSearch}
        onChange={(e) => handleSearchChange(e, "com")}
        placeholder="Search by Common Name"
      />
    </form>
  );
}

export default Search;
