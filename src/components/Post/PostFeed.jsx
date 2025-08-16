import PostCard from './PostCard';

const PostFeed = ({ posts, currentUser, onDeletePost }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-color-secondary">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
        <p>Start sharing your thoughts and memories!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <PostCard
          key={post.id}
          post={post}
          currentUser={currentUser}
          onDelete={onDeletePost}
          index={index}
        />
      ))}
    </div>
  );
};

export default PostFeed;
