// src/components/SpecialtiesComponent.jsx
import React from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const specialties = [
  { name: 'Cardiology', image: 'https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { name: 'Neurology', image: 'https://images.unsplash.com/photo-1719306171038-363e151a85fe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Orthopedics', image: 'https://images.unsplash.com/photo-1716929157559-d86a11b7b786?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { name: 'Pediatrics', image: 'https://images.unsplash.com/photo-1607099011510-6e203bde4ef9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { name: 'Dermatology', image: 'https://wp.globaluniversitysystems.com/mua/wp-content/uploads/sites/10/2023/02/what-is-a-dermatologist.webp' },

  { name: 'Gastroenterology', image: 'https://instine.in/wp-content/uploads/2022/08/GastroEndo-Image.jpg' },

];



const SpecialtiesComponent = () => {
  return (
    <div className='mx-auto p-4 my-5   '>
    <h3 className=' uppercase w-screen my-4 font-bold text-2xl text-zinc-600 '>our specialities:</h3>
    <div className=" grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-fr shadow-md">
    
      {specialties.map((specialty, index) => (
        <div style={
          {
            background:`URL(${specialty.image}) `
          }
        }
          key={index} 
          className={`relative p-4 border rounded-lg shadow-md hover:scale-105 hover:grayscale transition-all flex flex-col items-center h-50`}
        >
          <img 
            src={specialty.image} 
            alt={specialty.name} 
            className="w-full h-48 object-cover rounded-t-lg" 
          />
          <div className="p-2 text-center font-bold uppercase ">{specialty.name}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SpecialtiesComponent;
