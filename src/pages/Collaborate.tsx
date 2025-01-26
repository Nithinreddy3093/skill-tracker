import { useState } from 'react';
import { UserGroupIcon, CalendarIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Collaborate = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const studyGroups = [
    {
      title: 'React Study Group',
      description: 'Weekly discussions about React best practices and advanced concepts.',
      status: 'active',
      members: '2/5',
      schedule: 'Wednesdays at 18:00',
      tags: ['React', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Leadership Skills Workshop',
      description: 'Develop essential leadership and communication skills through practical exercises.',
      status: 'upcoming',
      members: '1/8',
      schedule: 'Mondays at 19:00',
      tags: ['Leadership', 'Communication', 'Time Management']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <UserGroupIcon className="h-8 w-8 text-indigo-600" /> Study Groups
          </h1>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          + Create Group
        </button>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search study groups..."
            className="w-full p-3 pl-10 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All Categories</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All Status</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Focus</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All Skills</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studyGroups.map((group, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <span className={`px-3 py-1 text-sm rounded-full ${
                group.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {group.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{group.description}</p>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <UserGroupIcon className="h-5 w-5" />
                <span>{group.members} members</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-5 w-5" />
                <span>{group.schedule}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {group.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Join Group
              </button>
              <button className="text-indigo-600 hover:text-indigo-700">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborate;