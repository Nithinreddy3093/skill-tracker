import { useState } from 'react';
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      type: 'Article',
      difficulty: 'intermediate',
      title: 'Mastering React Hooks',
      description: 'A comprehensive guide to React Hooks with practical examples and best practices.',
      tags: ['React', 'JavaScript', 'Web Development'],
      likes: 42,
      saved: false
    },
    {
      type: 'Video',
      difficulty: 'beginner',
      title: 'Effective Communication in Tech Teams',
      description: 'Learn essential communication skills for working in technical teams.',
      tags: ['Communication', 'Leadership', 'Team Work'],
      likes: 28,
      saved: true
    },
    {
      type: 'Tutorial',
      difficulty: 'advanced',
      title: 'Data Structures and Algorithms',
      description: 'Interactive tutorial covering fundamental data structures and algorithms.',
      tags: ['Algorithms', 'Problem Solving', 'Data Structures'],
      likes: 156,
      saved: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <span className="text-indigo-600">|||\\</span> Resource Library
        </h1>
        <p className="text-gray-600 mt-2">
          Discover curated resources to enhance your skills and knowledge
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search resources..."
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
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All Types</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Difficulty</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All Levels</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All Categories</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">{resource.type}</span>
              <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                {resource.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {resource.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-600">
                  {resource.likes > 0 ? (
                    <HeartIconSolid className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5" />
                  )}
                  <span>{resource.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600">
                  <BookmarkIcon className="h-5 w-5" />
                  <span>Save</span>
                </button>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700">
                View Resource →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;