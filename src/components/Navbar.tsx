import { Link } from 'react-router-dom';
import { HomeIcon, FlagIcon, BookOpenIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">SkillTrack</div>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/goals" className="flex items-center space-x-1 hover:text-indigo-200">
              <FlagIcon className="h-5 w-5" />
              <span>Goals</span>
            </Link>
            <Link to="/journal" className="flex items-center space-x-1 hover:text-indigo-200">
              <BookOpenIcon className="h-5 w-5" />
              <span>Journal</span>
            </Link>
            <Link to="/resources" className="flex items-center space-x-1 hover:text-indigo-200">
              <DocumentTextIcon className="h-5 w-5" />
              <span>Resources</span>
            </Link>
            <Link to="/collaborate" className="flex items-center space-x-1 hover:text-indigo-200">
              <UserGroupIcon className="h-5 w-5" />
              <span>Collaborate</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <button className="hover:text-indigo-200">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;