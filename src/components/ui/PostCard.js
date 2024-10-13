import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Star } from 'lucide-react';
import RatingModal from './RatingModal';
import CommentModal from './CommentModal';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(30);
  const [commentCount, setCommentCount] = useState(12);
  const [shareCount, setShareCount] = useState(5);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [rating, setRating] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
    setShowRatingModal(false);
  };

  return (
    <div className="max-w-2xl mt-3 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://avatars.githubusercontent.com/u/100100154?v=4"
              alt="Cameron Williamson"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">Cameron Williamson</h3>
              <p className="text-gray-500 text-sm">Posted on 10/12/2024</p>
            </div>
          </div>
          <button onClick={handleBookmark}>
            {bookmarked ? (
              <Bookmark className="text-yellow-400" />
            ) : (
              <Bookmark className="text-gray-400" />
            )}
          </button>
        </div>
        <p className="text-gray-800 mb-4">{post.content}</p>
        {post.file && (
          <div className="mb-4">
            {post.file.type.startsWith('image/') ? (
              <img src={URL.createObjectURL(post.file)} alt="Post" className="w-full h-auto" />
            ) : (
              <video controls className="w-full h-auto">
                <source src={URL.createObjectURL(post.file)} type={post.file.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-4">
            <button onClick={handleLike} className="flex items-center">
              <Heart className={`w-5 h-5 ${liked ? 'text-red-500' : 'text-gray-500'}`} />
              <span className="ml-1">{likeCount}</span>
            </button>
            <button onClick={() => setShowCommentModal(true)} className="flex items-center">
              <MessageCircle className="w-5 h-5 text-gray-500" />
              <span className="ml-1">{commentCount}</span>
            </button>
            <button onClick={() => setShowRatingModal(true)} className="flex items-center">
              <Star className="w-5 h-5 text-gray-500" />
            </button>
            <button className="flex items-center">
              <Share2 className="w-5 h-5 text-gray-500" />
              <span className="ml-1">{shareCount}</span>
            </button>
          </div>
        </div>
      </div>
      {showRatingModal && (
        <RatingModal onClose={() => setShowRatingModal(false)} onRate={handleRating} />
      )}
      {showCommentModal && (
        <CommentModal onClose={() => setShowCommentModal(false)} />
      )}
    </div>
  );
}
