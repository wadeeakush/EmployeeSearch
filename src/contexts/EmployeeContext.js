import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (employee) => {
    setFavorites((prevFavorites) => [...prevFavorites, employee]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, employee]));
  };

  const removeFavorite = (employee) => {
    const updatedFavorites = favorites.filter(fav => fav.login.uuid !== employee.login.uuid);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const fetchFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) setFavorites(storedFavorites);
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, setEmployees, favorites, addFavorite, removeFavorite, fetchFavorites }}>
      {children}
    </EmployeeContext.Provider>
  );
};
