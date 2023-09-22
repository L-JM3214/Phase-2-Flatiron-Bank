import React from "react";

function Search({ setSearchTerm }) {
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;


