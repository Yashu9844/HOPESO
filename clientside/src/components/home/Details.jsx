import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

// Register the required elements and scales with Chart.js
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const dummyData = {
  charts: [
    {
      type: 'pie',
      label: 'Patient Demographics',
      data: [45, 30, 15, 10],
      labels: ['Adults', 'Seniors', 'Children', 'Others'],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
    },
    {
      type: 'bar',
      label: 'Hospital Visits by Department',
      data: [150, 120, 90, 60],
      labels: ['Emergency', 'Surgery', 'Pediatrics', 'General'],
      backgroundColor: '#36a2eb',
    },
    {
      type: 'line',
      label: 'Monthly Recoveries',
      data: [20, 30, 25, 40, 35, 50, 45],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      borderColor: '#ff6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }
  ],
  stats: [
    { label: 'Total Staff', value: 300 },
    { label: 'Patients Recovered', value: 1500 },
    { label: 'Total Visits', value: 8000 },
    { label: 'Current Patients', value: 250 }
  ]
};

const HospitalStats = () => {
  return (
    <div className=" mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-full mb-4">
        <h2 className="text-2xl font-semibold text-center">We are here for you in your most desperate times.</h2>
      </div>
      {dummyData.charts.map((chart, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">{chart.label}</h3>
          {chart.type === 'pie' && (
            <Pie
              data={{
                labels: chart.labels,
                datasets: [
                  {
                    data: chart.data,
                    backgroundColor: chart.backgroundColor,
                  },
                ],
              }}
            />
          )}
          {chart.type === 'bar' && (
            <Bar
              data={{
                labels: chart.labels,
                datasets: [
                  {
                    label: chart.label,
                    data: chart.data,
                    backgroundColor: chart.backgroundColor,
                  },
                ],
              }}
            />
          )}
          {chart.type === 'line' && (
            <Line
              data={{
                labels: chart.labels,
                datasets: [
                  {
                    label: chart.label,
                    data: chart.data,
                    borderColor: chart.borderColor,
                    backgroundColor: chart.backgroundColor,
                  },
                ],
              }}
            />
          )}
        </div>
      ))}
      {dummyData.stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-xl font-bold">{stat.label}</h3>
          <p className="text-3xl font-semibold text-red-500">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default HospitalStats;
