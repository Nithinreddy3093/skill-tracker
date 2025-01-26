import { useState } from 'react';
import { DocumentTextIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Goals = () => {
  const [goalName, setGoalName] = useState('');
  const [category, setCategory] = useState('academic');
  const [targetDate, setTargetDate] = useState('');
  const [description, setDescription] = useState('');

  const existingGoals = [
    {
      title: 'Master React Hooks',
      category: 'academic',
      description: 'Learn and implement all common React hooks in practical projects',
      progress: 75,
      dueDate: '1/4/2024'
    },
    {
      title: 'Improve Public Speaking',
      category: 'soft',
      description: 'Practice presenting technical topics to different audiences',
      progress: 60,
      dueDate: '15/5/2024'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle goal creation
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Goal Setting</h1>
        <p className="text-gray-600">Set SMART goals to track your progress and achieve your aspirations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Goal</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Goal Name</label>
              <input
                type="text"
                placeholder="e.g., Master Python Programming"
                className="mt-1 block w-full rounded-md border-gray-300"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <div className="mt-1 flex gap-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    category === 'academic'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setCategory('academic')}
                >
                  <DocumentTextIcon className="h-5 w-5" />
                  Academic
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    category === 'soft'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setCategory('soft')}
                >
                  <DocumentTextIcon className="h-5 w-5" />
                  Soft Skill
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Target Date</label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  placeholder="dd-mm-yyyy"
                  className="block w-full rounded-md border-gray-300"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                />
                <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                placeholder="Describe your goal and what you want to achieve..."
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Create Goal
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
          <div className="space-y-4">
            {existingGoals.map((goal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{goal.title}</h3>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    goal.category === 'academic'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {goal.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                <div className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-gray-600">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>Due {goal.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;