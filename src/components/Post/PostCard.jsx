import { Heart, MessageCircle, Repeat, Trash2, Share } from 'lucide-react';
import { useState } from 'react';
import Avatar from '../UI/Avatar';

const PostCard = ({ post, currentUser, onDelete, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 1);
  
  const canDelete = currentUser && post.username === currentUser.username;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      onDelete(post.id);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInHours = Math.floor((now - postTime) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'now';
    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}d`;
  };

  return (
    <article className="group relative">
      {/* Glass card with enhanced styling */}
      <div 
        className="relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
        style={{
          background: 'rgba(24, 24, 24, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(199, 199, 201, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Animated gradient border */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, rgba(171, 107, 239, 0.3), rgba(215, 186, 255, 0.2), rgba(171, 107, 239, 0.3))',
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 3s ease infinite',
            padding: '1px',
            zIndex: -1
          }}
        />

        {/* Post Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar 
                character={post.avatar} 
                index={post.username.charCodeAt(0) + index}
                size="md"
                className="ring-2 ring-transparent group-hover:ring-purple-500/30 transition-all duration-300"
              />
              {/* Online indicator */}
              <div 
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 animate-pulse"
                style={{ 
                  backgroundColor: '#10b981', 
                  borderColor: '#181818' 
                }}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 
                  className="font-bold truncate text-base"
                  style={{ color: '#ffffff' }}
                >
                  {post.username}
                </h3>
                {post.username === currentUser?.username && (
                  <div 
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{ 
                      backgroundColor: 'rgba(171, 107, 239, 0.2)', 
                      color: '#d7baff' 
                    }}
                  >
                    You
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <time 
                  className="text-sm font-medium"
                  style={{ color: '#c7c7c9' }}
                >
                  {formatTime(post.timestamp)}
                </time>
                <span 
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: '#c7c7c9' }}
                />
                <span 
                  className="text-xs"
                  style={{ color: '#c7c7c9' }}
                >
                  Public
                </span>
              </div>
            </div>
          </div>
          
          {/* Delete button - only show if user can delete */}
          {canDelete && (
            <button
              onClick={handleDelete}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 group/delete cursor-pointer"
              title="Delete post"
              style={{ color: '#c7c7c9' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
                e.target.style.color = '#ef4444';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#c7c7c9';
                e.target.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <Trash2 size={20} />
            </button>
          )}
        </div>

        {/* Post Content */}
        <div className="px-6 pb-4">
          <div 
            className="text-lg leading-relaxed break-words whitespace-pre-wrap"
            style={{ color: '#ffffff' }}
          >
            {post.content}
          </div>
          
          {post.image && (
            <div className="mt-4 relative group/image">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full max-h-96 object-cover rounded-2xl transition-transform duration-300"
                style={{ border: '1px solid rgba(35, 35, 38, 0.5)' }}
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Enhanced Post Actions */}
        <div 
          className="px-6 py-4 border-t flex items-center justify-between"
          style={{ borderTopColor: 'rgba(35, 35, 38, 0.5)' }}
        >
          <div className="flex items-center gap-6">
            {/* Like button */}
            <button 
              onClick={handleLike}
              className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105"
              style={{
                color: isLiked ? '#ef4444' : '#c7c7c9',
                backgroundColor: isLiked ? 'rgba(239, 68, 68, 0.1)' : 'transparent'
              }}
              onMouseEnter={(e) => {
                if (!isLiked) {
                  e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                  e.target.style.color = '#ef4444';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLiked) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#c7c7c9';
                }
              }}
            >
              <Heart size={20} fill={isLiked ? '#ef4444' : 'none'} />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>

            {/* Comment button */}
            <button 
              className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105"
              style={{ color: '#c7c7c9' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(171, 107, 239, 0.1)';
                e.target.style.color = '#d7baff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#c7c7c9';
              }}
            >
              <MessageCircle size={20} />
              <span className="text-sm font-medium">{Math.floor(Math.random() * 20)}</span>
            </button>

            {/* Repost button */}
            <button 
              className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105"
              style={{ color: '#c7c7c9' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                e.target.style.color = '#10b981';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#c7c7c9';
              }}
            >
              <Repeat size={20} />
              <span className="text-sm font-medium">{Math.floor(Math.random() * 15)}</span>
            </button>
          </div>

          {/* Share button */}
          <button 
            className="p-2 rounded-full transition-all duration-200 hover:scale-110"
            style={{ color: '#c7c7c9' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(199, 199, 201, 0.1)';
              e.target.style.color = '#d7baff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#c7c7c9';
            }}
          >
            <Share size={18} />
          </button>
        </div>

        {/* Subtle shine effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
            transform: 'translateX(-100%)',
            animation: 'shine 2s ease-in-out infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </article>
  );
};

export default PostCard;
