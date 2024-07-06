/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

export default function Table() {
  const { userInfo } = useSelector((state) => state.form);
  
  return (
    <div className='table-container'>
      <table>
          <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Age</th>
            </tr>
        {userInfo?.map((user, index) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </table>
    
    </div>
  );
}
