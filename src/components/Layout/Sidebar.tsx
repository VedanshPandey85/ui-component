import React from 'react';
import { 
  Square, 
  Type, 
  MousePointer, 
  ToggleLeft, 
  Calendar, 
  MessageSquare, 
  AlertCircle, 
  Image, 
  Menu, 
  FileText,
  Grid3X3,
  Upload,
  CheckSquare,
  Radio,
  Sliders,
  Bell,
  User,
  Star,
  ChevronRight
} from 'lucide-react';

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  count?: number;
  isNew?: boolean;
  href?: string;
}

const componentCategories: { title: string; items: SidebarItem[] }[] = [
  {
    title: 'Form Components',
    items: [
      { name: 'Buttons', icon: <Square className="h-4 w-4" />, count: 130 },
      { name: 'Inputs', icon: <Type className="h-4 w-4" />, count: 45 },
      { name: 'Checkboxes', icon: <CheckSquare className="h-4 w-4" />, count: 19 },
      { name: 'Radio Buttons', icon: <Radio className="h-4 w-4" />, count: 12 },
      { name: 'Toggles', icon: <ToggleLeft className="h-4 w-4" />, count: 8 },
      { name: 'Sliders', icon: <Sliders className="h-4 w-4" />, count: 15 },
    ]
  },
  {
    title: 'Navigation',
    items: [
      { name: 'Menus', icon: <Menu className="h-4 w-4" />, count: 25 },
      { name: 'Breadcrumbs', icon: <ChevronRight className="h-4 w-4" />, count: 8 },
      { name: 'Tabs', icon: <Grid3X3 className="h-4 w-4" />, count: 18 },
    ]
  },
  {
    title: 'Data Display',
    items: [
      { name: 'Cards', icon: <FileText className="h-4 w-4" />, count: 79 },
      { name: 'Tables', icon: <Grid3X3 className="h-4 w-4" />, count: 34 },
      { name: 'Lists', icon: <Menu className="h-4 w-4" />, count: 22 },
      { name: 'Avatars', icon: <User className="h-4 w-4" />, count: 17 },
      { name: 'Badges', icon: <Star className="h-4 w-4" />, count: 25 },
    ]
  },
  {
    title: 'Feedback',
    items: [
      { name: 'Alerts', icon: <AlertCircle className="h-4 w-4" />, count: 23 },
      { name: 'Notifications', icon: <Bell className="h-4 w-4" />, count: 16 },
      { name: 'Modals', icon: <MessageSquare className="h-4 w-4" />, count: 37 },
      { name: 'Tooltips', icon: <MessageSquare className="h-4 w-4" />, count: 14 },
    ]
  },
  {
    title: 'Media',
    items: [
      { name: 'Images', icon: <Image className="h-4 w-4" />, count: 28 },
      { name: 'File Uploads', icon: <Upload className="h-4 w-4" />, count: 7 },
    ]
  },
  {
    title: 'Date & Time',
    items: [
      { name: 'Date Pickers', icon: <Calendar className="h-4 w-4" />, count: 12, isNew: true },
      { name: 'Calendars', icon: <Calendar className="h-4 w-4" />, count: 34, isNew: true },
    ]
  }
];

interface SidebarProps {
  selectedComponent?: string;
  onComponentSelect?: (component: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  selectedComponent = 'Buttons', 
  onComponentSelect 
}) => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            UI Components
          </h2>
        </div>

        <nav className="space-y-6">
          {componentCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onComponentSelect?.(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                        selectedComponent === item.name
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-r-2 border-primary-600'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={selectedComponent === item.name ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'}>
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.name}</span>
                        {item.isNew && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                            New
                          </span>
                        )}
                      </div>
                      {item.count && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {item.count}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};