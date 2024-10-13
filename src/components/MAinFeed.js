import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import StoryCircles from './Stories';
import CreatePostCard from './CreatePost'; 
import PostCard from './ui/PostCard'; 
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import MessageButton from './MessageButton';
import Balanced from './Balanced';
import Navbar from './Navbar';

export default function MainFeed() {
    // État pour stocker les posts
    const [posts, setPosts] = useState([]);

    // Fonction pour ajouter un nouveau post
    const addPost = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div className="max-w-8xl mx-auto ml-20 overflow-scroll">
            <div className="flex gap-6 mt-20">
                <div className="w-1/4 pl-8">
                    <ProfileInfo />
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className="mb-6">
                        <StoryCircles />
                    </div>
                    {/* Le formulaire de création de post */}
                    <CreatePostCard onAddPost={addPost} />
                    {/* Afficher tous les posts */}
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post} />
                    ))}
                </div>
                <div className="w-1/4">
                    <RightSidebar />
                </div>
=======
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [balance, setBalance] = useState(500);
    const [purchaseHistory, setPurchaseHistory] = useState([
        { date: '2024-10-15', amount: 100 },
        { date: '2024-10-01', amount: 50 },
        { date: '2024-09-15', amount: 200 },
    ]);

    const handleRefresh = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setBalance(prevBalance => prevBalance + Math.floor(Math.random() * 50));
    };

    const handlePurchase = () => {
        const amount = 100;
        setBalance(prevBalance => prevBalance + amount);
        setPurchaseHistory(prevHistory => [
            { date: new Date().toISOString(), amount },
            ...prevHistory
        ]);
    };
// 
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);