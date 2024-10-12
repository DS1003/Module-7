import React from 'react';

const UserPhotos = ({ photos }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Photos</h2>
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`User photo ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default UserPhotos;