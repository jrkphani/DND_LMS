import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import UserSidebar from './UserSidebar';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Mail, User, Settings, Bell } from 'lucide-react';

const mentors = [
  {
    name: 'Kiliam Rosvelt',
    role: 'Software Developer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Teodor Maskevich',
    role: 'Product Owner',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Andrew Kooller',
    role: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    name: 'Adam Chekish',
    role: 'Backend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    name: 'Anton Peterson',
    role: 'Software Developer',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    name: 'Matew Jackson',
    role: 'Product Designer',
    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
  },
];

const RightSidebar = () => (
  <aside className="hidden xl:block w-80 p-6 bg-white rounded-2xl shadow-lg ml-6 flex flex-col gap-8">
    {/* Profile Section */}
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
          <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
          <AvatarFallback>GA</AvatarFallback>
        </Avatar>
        <div className="absolute inset-0 rounded-full border-4 border-violet-200 pointer-events-none" />
      </div>
      <div className="font-bold text-lg mt-2">Good Morning Alex</div>
      <div className="text-xs text-gray-400 text-center mb-2">Continue Your Journey And Achieve Your Target</div>
      <div className="flex gap-4 mb-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-50 text-violet-600 hover:bg-violet-100 shadow"><Bell className="h-5 w-5" /></button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-50 text-violet-600 hover:bg-violet-100 shadow"><Mail className="h-5 w-5" /></button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-50 text-violet-600 hover:bg-violet-100 shadow"><Settings className="h-5 w-5" /></button>
      </div>
    </div>
    {/* Bar Chart */}
    <div className="flex items-end justify-center gap-8 mb-4">
      <div className="flex flex-col items-center h-32 justify-end">
        <div
          className="w-8 shadow"
          style={{
            height: '100%',
            minHeight: '2rem',
            transition: 'height 0.5s',
            background: 'linear-gradient(to top, #7c3aed 33%, #a78bfa 33%, #a78bfa 66%, #ddd6fe 66%, #ddd6fe 100%)'
          }}
        />
        <span className="mt-2 text-xs text-gray-500 text-center w-16 leading-tight">3S Orientation</span>
      </div>
      <div className="flex flex-col items-center h-24 justify-end">
        <div
          className="w-8 shadow"
          style={{
            height: '100%',
            minHeight: '1.5rem',
            transition: 'height 0.5s',
            background: 'linear-gradient(to top, #7c3aed 33%, #a78bfa 33%, #a78bfa 66%, #ddd6fe 66%, #ddd6fe 100%)'
          }}
        />
        <span className="mt-2 text-xs text-gray-500 text-center w-16 leading-tight">Overall Completion</span>
      </div>
    </div>
    {/* Mentor Section */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold text-base">Your Mentor</div>
        <button className="w-6 h-6 flex items-center justify-center rounded-full bg-violet-50 text-violet-600 hover:bg-violet-100 shadow text-lg font-bold">+</button>
      </div>
      <ul className="space-y-3">
        {mentors.map((mentor) => (
          <li key={mentor.name} className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={mentor.avatar} alt={mentor.name} />
              <AvatarFallback>{mentor.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium text-sm leading-tight">{mentor.name}</div>
              <div className="text-xs text-gray-400">{mentor.role}</div>
            </div>
            <button className="px-4 py-1 rounded-lg bg-violet-600 text-white text-xs font-semibold shadow hover:bg-violet-700 transition">Follow</button>
          </li>
        ))}
      </ul>
    </div>
    <button className="w-full mt-4 py-3 rounded-xl bg-violet-50 text-violet-700 font-semibold text-base shadow hover:bg-violet-100 transition">See All</button>
  </aside>
);

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <Navbar />
      <div className="flex flex-1 gap-6 p-6">
        <UserSidebar />
        <main className="flex-1 overflow-auto pl-64">
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
