import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const UserPosts = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src={post.author.profilePicture}
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
          <p className="mb-4">{post.content}</p>
          {post.image && (
            <img src={post.image} alt="Post" className="w-full rounded-lg mb-4" />
          )}
          <div className="flex justify-between items-center text-gray-500">
            <button className="flex items-center">
              <Heart className="w-5 h-5 mr-1" />
              {post.likes}
            </button>
            <button className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-1" />
              {post.comments}
            </button>
            <button className="flex items-center">
              <Share2 className="w-5 h-5 mr-1" />
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;