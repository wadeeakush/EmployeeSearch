import React, { useContext, useEffect } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import EmployeeCard from './EmployeeCard';
import '../styles/Favorites.css';

const Favorites = () => {
  const { favorites, fetchFavorites } = useContext(EmployeeContext);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="employee-list">
        {favorites.map((employee) => (
          <EmployeeCard key={employee.login.uuid} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
