import React from 'react';
import { Ruler } from 'lucide-react';

const UserMeasurements = ({ measurements }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Ruler className="w-6 h-6 mr-2 text-gray-500" />
        Measurements
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Height</p>
          <p>{measurements.height}</p>
        </div>
        <div>
          <p className="font-semibold">Weight</p>
          <p>{measurements.weight}</p>
        </div>
        <div>
          <p className="font-semibold">Chest</p>
          <p>{measurements.chest}</p>
        </div>
        <div>
          <p className="font-semibold">Waist</p>
          <p>{measurements.waist}</p>
        </div>
        <div>
          <p className="font-semibold">Hips</p>
          <p>{measurements.hips}</p>
        </div>
        <div>
          <p className="font-semibold">Shoe Size</p>
          <p>{measurements.shoeSize}</p>
        </div>
      </div>
    </div>
  );
};

export default UserMeasurements;