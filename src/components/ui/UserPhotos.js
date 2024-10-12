import React from 'react';

const UserPhotos = ({ photos }) => {
  return (
    <div className="bg-white border-2 border-[#CC8C87] rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Photos</h2>
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <img
            key={index}
            src="https://avatars.githubusercontent.com/u/100100154?v=4"
            alt={`User photo ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default UserPhotos;