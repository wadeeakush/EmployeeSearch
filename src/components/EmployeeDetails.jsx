import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';
import '../styles/EmployeeDetails.css';

const EmployeeDetails = () => {
  const { id } = useParams();
  const { employees, addFavorite } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundEmployee = employees.find(emp => emp.login.uuid === id);
    if (foundEmployee) {
      setEmployee(foundEmployee);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id, employees]);

  const handleAddFavorite = () => {
    addFavorite(employee);
    setMessage('Added to favorites successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  if (loading) return <p>Loading...</p>;

  if (!employee) return <p>Employee not found.</p>;

  return (
    <div className="employee-details">
      <img src={employee.picture.large} alt={employee.name.first} />
      <h2>{employee.name.title} {employee.name.first} {employee.name.last}</h2>
      <p><strong>Username:</strong> {employee.login.username}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Cell:</strong> {employee.cell}</p>
      <p><strong>Age:</strong> {employee.dob.age}</p>
      <p><strong>Location:</strong> {employee.location.city}, {employee.location.state}, {employee.location.country}</p>
      <p><strong>Full Address:</strong> {employee.location.street.number} {employee.location.street.name}, {employee.location.city}, {employee.location.state}, {employee.location.postcode}, {employee.location.country}</p>
      <button onClick={handleAddFavorite}>Save Favorite</button>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default EmployeeDetails;
