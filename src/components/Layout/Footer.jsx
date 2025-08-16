import { Heart, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-bg-sidebar/95 backdrop-blur-xl border-t border-white/30 py-8 text-center text-color-secondary text-sm mt-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Copyright and brand */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <p className="text-color-primary font-medium">
              © 2025 Rajgraphy
            </p>
            <div className="hidden md:block w-1 h-1 bg-color-secondary rounded-full"></div>
            <span className="hidden md:inline text-xs">Threads inspired UI</span>
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-color-accent hover:text-purple-400 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-color-accent hover:text-purple-400 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-color-accent hover:text-purple-400 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Right side - Social icons and status */}
          <div className="flex items-center gap-4">
            {/* Social links */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-color-secondary hover:text-color-accent hover:bg-white/10 rounded-full transition-all duration-300">
                <Github size={16} />
              </button>
              <button className="p-2 text-color-secondary hover:text-color-accent hover:bg-white/10 rounded-full transition-all duration-300">
                <Twitter size={16} />
              </button>
              <button className="p-2 text-color-secondary hover:text-color-accent hover:bg-white/10 rounded-full transition-all duration-300">
                <Mail size={16} />
              </button>
            </div>
            
            {/* Made with love indicator */}
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full border border-pink-500/30">
              <span className="text-xs text-pink-300">Made with</span>
              <Heart size={12} className="text-pink-400 fill-pink-400" />
            </div>
          </div>
        </div>

        {/* Bottom section - Additional info */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-color-secondary">
            <div className="flex items-center gap-4">
              <span>Built with React & Tailwind CSS</span>
              <div className="w-1 h-1 bg-color-secondary rounded-full"></div>
              <span>Vite Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Rajiv Sharma</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
      
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
