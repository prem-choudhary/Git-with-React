// src/components/DeviceCard.js

const DeviceCard = ({ device, toggleDevice }) => {
  return (
    <div className="">
      <h2 className="">{device.name}</h2>
      <p className="">Status: {device.status}</p>
      <button 
        className=""
        onClick={() => toggleDevice(device.id)}
      >
        {device.status === 'on' ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default DeviceCard;
