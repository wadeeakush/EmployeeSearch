import React, { useState, useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import '../styles/SearchBar.css';

const DEFAULT_SEED = 'google';
const RESULTS_PER_PAGE = 10;
const INITIAL_RESULTS = 10;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { setEmployees } = useContext(EmployeeContext);

  const searchEmployees = async () => {
    setLoading(true);
    try {
      const seed = query.trim() ? query : DEFAULT_SEED;
      const resultsPerPage = page === 1 ? INITIAL_RESULTS : RESULTS_PER_PAGE;
      const response = await fetch(
        `https://randomuser.me/api/?results=${resultsPerPage}&page=${page}&seed=${seed}`
      );
      const data = await response.json();
      setEmployees(data.results);
    } catch (error) {
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    searchEmployees();
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    searchEmployees();
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    searchEmployees();
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search company..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {loading && <div className="loader"></div>}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1 || loading}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage} disabled={loading}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
