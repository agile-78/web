import React from 'react';

const YourComponent: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <button className="bg-blue-500 text-white text-xl font-semibold py-48 px-16 rounded-lg mb-10 hover:bg-blue-600" style={{ width: '100%' }}>
      Scan to Earn Points
    </button>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <button className="bg-blue-500 text-white text-lg font-semibold py-24 px-20 rounded-lg hover:bg-blue-600" style={{ width: '49%' }}>
        Rewards
      </button>
      <button className="bg-blue-500 text-white text-lg font-semibold py-24 px-20 rounded-lg hover:bg-blue-600" style={{ width: '49%' }}>
        Recycling Locations
      </button>
    </div>
  </div>
);

export default YourComponent;
