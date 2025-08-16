import Avatar from '../UI/Avatar';
import { DEMO_USERS, TRENDING_TOPICS } from '../../utils/constants';

const RightSidebar = ({ currentUser }) => {
  const suggestedUsers = DEMO_USERS.slice(0, 7).filter(u => u.username !== currentUser.username);

  return (
    <aside className="fixed right-0 top-0 w-68 h-screen bg-[#151518] border-l border-white/30 pt-20 px-4 hidden xl:block overflow-y-auto">
      {/* Suggested Users */}
      <div className="mb-8">
        <h3 className="font-bold text-color-accent mb-3">Suggested Users</h3>
        <div className="space-y-3">
          {suggestedUsers.map((user, index) => (
            <div key={user.username} className="flex items-center gap-3">
              <Avatar 
                character={user.avatar} 
                index={index + 2} 
                size="sm"
              />
              <div className="flex-1">
                <div className="font-bold text-color-primary text-sm">{user.username}</div>
                <div className="text-color-secondary text-xs cursor-pointer hover:text-color-accent">
                  Follow
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div>
        <h3 className="font-bold text-color-accent mb-3">Trending</h3>
        <div className="space-y-2">
          {TRENDING_TOPICS.map((topic, index) => (
            <div 
              key={index}
              className="text-color-secondary cursor-pointer hover:text-color-accent transition-colors"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
