import { LogOut } from 'lucide-react';
import Button from '../UI/Button';

const Header = ({ onLogout }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-bg-sidebar/95 backdrop-blur-xl border-b border-white/30 z-50 h-16 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-color-action to-purple-700 bg-clip-text text-transparent tracking-wide">
            Rajgraphy
          </h1>
          
        </div>

        <div className="flex items-center gap-4">
          {/* User indicator dot */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-color-secondary text-sm hidden sm:block">Online</span>
          </div>
          
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={onLogout}
            className="hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 transition-all duration-300"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
      
      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
    </header>
  );
};

export default Header;
