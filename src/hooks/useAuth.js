import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { getAvatarChar } from '../utils/helpers';

export const useAuth = () => {
  const [user, setUser] = useLocalStorage('rajgraphy_user', null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  useEffect(() => {
    // Ensure authentication state is updated when user changes
    setIsAuthenticated(!!user);
  }, [user]);

  const login = (username, password) => {
    if (username && password.length > 2) {
      const newUser = {
        username: username.trim().slice(0, 20),
        avatar: getAvatarChar(username)
      };
      setUser(newUser);
      setIsAuthenticated(true); // Explicitly set authentication state
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false); // Explicitly set authentication state
    // Clear localStorage to ensure complete logout
    localStorage.removeItem('rajgraphy_user');
  };

  return {
    user,
    isAuthenticated,
    login,
    logout
  };
};
