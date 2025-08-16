import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { DEMO_USERS, DEMO_IMAGES, DEMO_BLOGS } from '../utils/constants';

export const usePosts = () => {
  const [posts, setPosts] = useLocalStorage('rajgraphy_posts', []);

  useEffect(() => {
    // Initialize with demo posts if no posts exist
    if (posts.length === 0) {
      const demoPosts = DEMO_BLOGS.map((blog, i) => ({
        id: Date.now() - (1000 * 60 * 60 * i),
        username: DEMO_USERS[blog.user].username,
        avatar: DEMO_USERS[blog.user].avatar,
        content: blog.text,
        image: blog.image !== null ? DEMO_IMAGES[blog.image % DEMO_IMAGES.length] : null,
        timestamp: new Date(Date.now() - (1000 * 60 * 60 * i)).toLocaleString(),
        date: Date.now() - (1000 * 60 * 60 * i)
      }));
      setPosts(demoPosts);
    }
  }, []);

  const addPost = (content, image, user) => {
    const newPost = {
      id: Date.now(),
      username: user.username,
      avatar: user.avatar,
      content,
      image,
      timestamp: new Date().toLocaleString(),
      date: Date.now()
    };
    
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const deletePost = (postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  return {
    posts,
    addPost,
    deletePost
  };
};
