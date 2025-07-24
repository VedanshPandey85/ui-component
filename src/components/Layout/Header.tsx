import React from 'react';
import { Search, Sun, Moon, Monitor, User } from 'lucide-react';
import { useThemeContext } from '../ThemeProvider/ThemeProvider';
import { Button } from '../Button/Button';

export const Header: React.FC = () => {
  const { theme, setTheme } = useThemeContext();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
    }
  };

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UI</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Component Library
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a 
                href="#" 
                className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Components
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Templates
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Documentation
              </a>
            </nav>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search components..."
                className="pl-10 pr-4 py-2 w-64 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Theme Toggle */}
            <Button
              variant="secondary"
              size="sm"
              onClick={cycleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
              className="hidden sm:flex"
            >
              {getThemeIcon()}
            </Button>

            {/* User Profile */}
            <Button
              variant="secondary"
              size="sm"
              className="hidden sm:flex"
            >
              <User className="h-4 w-4" />
              Profile
            </Button>

            {/* Mobile Search Button */}
            <Button
              variant="secondary"
              size="sm"
              className="sm:hidden"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};