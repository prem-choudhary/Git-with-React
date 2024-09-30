// src/components/Dashboard.js
import  { useState } from 'react';
// import DeviceCard from './DeviceCard';
// import DeviceCard from '/DeviceCard'
import DeviceCard from './DeviceCard';

const Dashboard = () => {
  const initialData = [
    { id: 1, name: 'Living Room Light', status: 'on' },
    { id: 2, name: 'Thermostat', status: 'off' },
    { id: 3, name: 'Security Camera', status: 'on' },
  ];

  const [devices, setDevices] = useState(initialData);

  const toggleDevice = (id) => {
    setDevices(devices.map(device => 
      device.id === id ? { ...device, status: device.status === 'on' ? 'off' : 'on' } : device
    ));
  };

  return (
    <div className="class">
      {devices.map(device => (
        <DeviceCard key={device.id} device={device} toggleDevice={toggleDevice} />
      ))}
    </div>
  );
};

export default Dashboard;
