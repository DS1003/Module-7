import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import StoryCircles from './Stories';
import CreatePostCard from './CreatePost'; 
import PostCard from './ui/PostCard'; 
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

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
            </div>
        </div>
    );
}
