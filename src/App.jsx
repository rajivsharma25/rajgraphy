import { useAuth } from './hooks/useAuth';
import { usePosts } from './hooks/usePosts';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const { posts, addPost, deletePost } = usePosts();

  const handleAddPost = (content, image) => {
    addPost(content, image, user);
  };

  const handleLogout = () => {
    logout();
    // Force a re-render by updating the key
    window.location.reload = false;
  };

  // Add a loading state to prevent flash
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center">
        <div className="text-color-primary">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Login onLogin={login} />;
  }

  return (
    <Home
      user={user}
      onLogout={handleLogout}
      posts={posts}
      onAddPost={handleAddPost}
      onDeletePost={deletePost}
    />
  );
}

export default App;
