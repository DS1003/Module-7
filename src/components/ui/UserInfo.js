import React from 'react';
import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';

const UserInfo = ({ user }) => {
  return (
    <div className="bg-white rounded-lg border-2 border-[#CC8C87] shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <div className="space-y-3">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-gray-500 mr-2" />
          <span>{user.location}</span>
        </div>
        <div className="flex items-center">
          <Briefcase className="w-5 h-5 text-gray-500 mr-2" />
          <span>{user.work}</span>
        </div>
        <div className="flex items-center">
          <GraduationCap className="w-5 h-5 text-gray-500 mr-2" />
          <span>{user.education}</span>
        </div>
        <div className="flex items-center">
          <Heart className="w-5 h-5 text-gray-500 mr-2" />
          <span>{user.relationshipStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;