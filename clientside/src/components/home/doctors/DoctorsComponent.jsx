import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import './DoctorsComponent.css'; // Import any additional CSS if needed

const doctors = [
  { name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. William Brown', specialty: 'Orthopedic Surgeon', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. Emily White', specialty: 'Pediatrician', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. William Brown', specialty: 'Orthopedic Surgeon', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. Emily White', specialty: 'Pediatrician', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' }, 
  { name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. William Brown', specialty: 'Orthopedic Surgeon', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
  { name: 'Dr. Emily White', specialty: 'Pediatrician', image: 'https://t4.ftcdn.net/jpg/06/01/95/47/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg' },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const DoctorsComponent = ({ theme }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [chunkedDoctors, setChunkedDoctors] = useState(chunkArray(doctors, 4));
  const [chunkSize, setChunkSize] = useState(4);

  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 768) {
        setChunkSize(1); // 1 card per slide on mobile
      } else {
        setChunkSize(4); // 4 cards per slide on larger devices
      }
    };

    updateChunkSize(); // Set initial chunk size

    window.addEventListener('resize', updateChunkSize); // Update on resize

    return () => {
      window.removeEventListener('resize', updateChunkSize); // Clean up listener
    };
  }, []);

  useEffect(() => {
    const searchRegex = new RegExp(searchTerm, 'i'); // Case-insensitive regex

    const filteredDoctors = doctors
      .filter(doctor => searchRegex.test(doctor.name) || searchRegex.test(doctor.specialty));

    setChunkedDoctors(chunkArray(filteredDoctors, chunkSize));
  }, [searchTerm, chunkSize]);

  return (
    <div className={`doctors-section ${theme}`}>
      <div className='lg:flex justify-between'>
        <h2 className="text-2xl font-bold mb-4  ">Our Doctors</h2>
        
        <div className="search-sort-controls mb-4 flex items-center ">
          <h3 className='font-semibold text-lg text-zinc-400 w-fit'>Search</h3>
          <input
            type="text"
            placeholder="Name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={false}
        showThumbs={false}
      >
        {chunkedDoctors.map((chunk, idx) => (
          <div key={idx} className="doctor-slide mb-10 mt-6">
            {chunk.map((doctor, index) => (
              <div key={index} className="doctor-card">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DoctorsComponent;
