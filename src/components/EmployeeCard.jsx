import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';
import '../styles/EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  const { addFavorite } = useContext(EmployeeContext);
  const [message, setMessage] = useState('');

  const handleAddFavorite = () => {
    addFavorite(employee);
    setMessage('Added to favorites successfully!');
    
    setTimeout(() => {
      setMessage('');
    }, 1000);
  }

  return (
    <div className="employee-card">
      <img src={employee.picture.medium} alt={employee.name.first} />
      <h3>{employee.name.first} {employee.name.last}</h3>
      <p>Age: {employee.dob.age}</p>
      <p>Location: {employee.location.city}, {employee.location.state}</p>
      <Link to={`/employee/${employee.login.uuid}`}>More Details</Link>
      <button onClick={handleAddFavorite}>Save Favorite</button>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default EmployeeCard;
