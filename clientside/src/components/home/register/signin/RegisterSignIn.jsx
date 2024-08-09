import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterSignIn.css';

const roles = [
  { name: 'Doctor', link: '/register_signin/doctor', image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail.jpg' },
  { name: 'Patient', link: '/register_signin/patient', image: 'https://aighospitals.com/uploads/images/167386025063c5149a04cbc.jpg' },
  { name: 'Staff', link: '/register_signin/staff', image: 'https://t4.ftcdn.net/jpg/02/63/76/75/360_F_263767541_MP04Nw3RwWewgF8FmdRtx3OzEQZOo1w0.jpg' },
];

const RegisterSignIn = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-10 text-red-500">Choose Your Role</h1>
      <div className="flex flex-wrap justify-center space-x-0 md:space-x-10">
        {roles.map((role, index) => (
          <Link
            to={role.link}
            key={role.name}
            className={`role-card ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-card' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="role-card-content">
              <img src={role.image} alt={role.name} className={`role-card-image ${hoveredIndex === null ? '' : 'blur-image'}`} />
              <div className="role-card-overlay">
                <h2 className="text-2xl font-semibold text-white">{role.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegisterSignIn;