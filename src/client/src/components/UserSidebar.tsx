import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronRight, 
  Home, 
  Book, 
  Calendar, 
  Award, 
  Settings, 
  HelpCircle, 
  LogOut, 
  User
} from 'lucide-react';

const friends = [
  { name: 'Andrew Meter', role: 'Software Developer' },
  { name: 'Jeff Linkoln', role: 'Product Owner' },
  { name: 'Sasha Melstone', role: 'HR Manager' },
];

const UserSidebar = () => {
  const location = useLocation();
  const menuItems = [
    { name: 'Dashboard', icon: <Home className="h-4 w-4" />, path: '/dashboard' },
    { name: 'My Courses', icon: <Book className="h-4 w-4" />, path: '/courses' },
    { name: 'Schedule', icon: <Calendar className="h-4 w-4" />, path: '/schedule' },
    { name: 'Certificates', icon: <Award className="h-4 w-4" />, path: '/certificates' },
    { name: 'Settings', icon: <Settings className="h-4 w-4" />, path: '/settings' },
    { name: 'Help', icon: <HelpCircle className="h-4 w-4" />, path: '/help' },
  ];

  return (
    <aside className="fixed left-0 z-30 h-[calc(100vh-4rem-0.5rem)] w-64 flex flex-col rounded-2xl shadow-lg border-r p-4 bg-white justify-between mt-2 top-[68px]">
      <div>
        {/* Navigation */}
        <nav className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 ${location.pathname === item.path ? 'bg-violet-100 text-violet-700' : ''}`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ))}
        </nav>
        {/* Friends */}
        <div className="mb-8">
          <div className="text-xs text-gray-400 font-semibold mb-2 px-2">FRIENDS</div>
          <ul className="space-y-1">
            {friends.map((friend) => (
              <li key={friend.name} className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600">
                <User className="h-4 w-4 text-gray-400" />
                <span>{friend.name}</span>
                <span className="ml-auto text-gray-300 text-xs">{friend.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Settings & Logout */}
      <div className="space-y-1">
        <Link to="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-violet-50 hover:text-violet-700 transition-colors">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Link>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors w-full">
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default UserSidebar;
