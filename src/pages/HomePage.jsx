import React, { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import EmployeeCard from '../components/EmployeeCard';
import SearchBar from '../components/SearchBar';
import '../styles/HomePage.css';

const HomePage = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="home-page">
      <SearchBar />
      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeCard key={employee.login.uuid} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
