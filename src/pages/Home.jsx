import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import RightSidebar from '../components/Layout/RightSidebar';
import Footer from '../components/Layout/Footer';
import PostComposer from '../components/Post/PostComposer';
import PostFeed from '../components/Post/PostFeed';

const Home = ({ user, onLogout, posts, onAddPost, onDeletePost }) => {
  return (
    <div className="min-h-screen bg-bg-main flex flex-col">
      <Header onLogout={onLogout} />
      
      <div className="flex flex-1">
        <Sidebar user={user} />
        
        {/* Main content area with vertical centering */}
        <main className="flex-1 lg:ml-60 xl:mr-68 mt-24 flex flex-col">
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl">
              <div className="space-y-6">
                <PostComposer user={user} onSubmit={onAddPost} />
                <PostFeed 
                  posts={posts} 
                  currentUser={user} 
                  onDeletePost={onDeletePost} 
                />
              </div>
            </div>
          </div>
        </main>
        
        <RightSidebar currentUser={user} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
