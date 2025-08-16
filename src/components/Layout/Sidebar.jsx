import { Home, Search, Bookmark, Users } from 'lucide-react';
import Avatar from '../UI/Avatar';

const Sidebar = ({ user }) => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Explore' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: Users, label: 'Following' }
  ];

  return (
    <nav className="fixed left-0 top-0 w-60 h-screen bg-[#151518] border-r border-white/30 pt-20 px-6 hidden lg:flex flex-col">
      {/* Profile Card */}
      <div className="flex flex-col items-center mb-10">
        <Avatar 
          character={user.avatar} 
          index={user.username.charCodeAt(0)} 
          size="xl" 
          className="mb-2"
        />
        <h2 className="font-bold text-color-primary">{user.username}</h2>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`
              flex items-center gap-3 px-3 py-3 rounded-2xl transition-colors
              ${item.active 
                ? 'bg-white/30 text-color-accent' 
                : 'text-color-secondary hover:bg-white/30 hover:text-color-accent'
              }
            `}
          >
            <item.icon size={20} />
            <span className="text-lg">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
