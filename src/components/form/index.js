import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFomeData } from '../../slice/formSlice';
import './style.css'

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    await dispatch(getFomeData(formData))
      setFormData({ name: '', email: '', age: '' })
  };

  return (
   <div>
     <form onSubmit={handleSubmit}>
      <h3 className='form-heading'>Get userInfo</h3>
      <div className='user-form-container'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
   </div>
  );
};

export default UserForm;
