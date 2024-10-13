import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import StoryCircles from './Stories';
import CreatePostCard from './CreatePost';
import Post from './ui/PostCard';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import MessageButton from './MessageButton';

export default function MainFeed() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="max-w-8xl mx-auto ml-20 overflow-scroll relative">
            {/* Conteneur Flex pour afficher ProfileInfo à gauche et les Stories à droite */}
            <div className="flex gap-6 mt-20">
                {/* Le profil sur la gauche */}
                <div className="w-1/4 pl-8">
                    <ProfileInfo />
                    <Sidebar />
                </div>

                {/* Les Stories et le formulaire de création de post à droite */}
                <div className="flex-1">
                    {/* Les Stories */}
                    <div className="mb-6">
                        <StoryCircles />
                    </div>
                    {/* Le formulaire de création de post */}
                    <CreatePostCard />
                    <Post />
                    <Post />
                </div>

                {/* Message button to toggle sidebar */}
                <div className="fixed bottom-6 right-6 z-50">
                    <MessageButton onClick={toggleSidebar} />
                </div>

                {/* RightSidebar */}
                <RightSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            </div>
        </div>
    );
}