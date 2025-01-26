import { useState } from 'react';
import { FaceSmileIcon, FaceMehIcon, FaceFrownIcon, TagIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

const Journal = () => {
  const [mood, setMood] = useState<'happy' | 'neutral' | 'sad' | null>(null);
  const [entry, setEntry] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    'Critical Thinking',
    'Time Management',
    'Data Analysis',
    'Communication',
    'Problem Solving',
    'Leadership'
  ];

  const recentEntries = [
    {
      date: 'Sunday, January 26, 2025',
      content: 'Today I made significant progress in my React studies. I learned about hooks and implemented them in my project. The concepts are becoming clearer, but I still need more practice with useEffect.',
      mood: 'happy',
      skills: ['Critical Thinking', 'Problem Solving']
    },
    {
      date: 'Saturday, January 25, 2025',
      content: 'Struggled with some complex algorithms today. While it was challenging, I learned a lot about different problem-solving approaches. Need to review time complexity concepts.',
      mood: 'sad',
      skills: ['Problem Solving', 'Data Analysis']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle journal entry submission
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const MoodIcon = ({ type, selected }: { type: 'happy' | 'neutral' | 'sad', selected: boolean }) => {
    const Icon = {
      happy: FaceSmileIcon,
      neutral: FaceMehIcon,
      sad: FaceFrownIcon
    }[type];

    return (
      <button
        type="button"
        onClick={() => setMood(type)}
        className={`p-3 rounded-full ${
          selected
            ? 'bg-indigo-100 text-indigo-600'
            : 'text-gray-400 hover:bg-gray-100'
        }`}
      >
        <Icon className="h-8 w-8" />
      </button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Learning Journal</h1>
        <p className="text-gray-600">Reflect on your learning journey and track your progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">New Entry</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How are you feeling about your progress today?
              </label>
              <div className="flex gap-4">
                <MoodIcon type="happy" selected={mood === 'happy'} />
                <MoodIcon type="neutral" selected={mood === 'neutral'} />
                <MoodIcon type="sad" selected={mood === 'sad'} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reflect on your learning journey
              </label>
              <textarea
                placeholder="What did you learn today? What challenges did you face? What are your next steps?"
                rows={6}
                className="mt-1 block w-full rounded-md border-gray-300"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Related Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      selectedSkills.includes(skill)
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <TagIcon className="h-4 w-4 mr-1" />
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Save Entry
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Entries</h2>
          <div className="space-y-6">
            {recentEntries.map((entry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-600">{entry.date}</div>
                  {entry.mood === 'happy' && <FaceSmileIcon className="h-6 w-6 text-green-500" />}
                  {entry.mood === 'sad' && <FaceFrownIcon className="h-6 w-6 text-yellow-500" />}
                </div>
                <p className="text-gray-800 mb-4">{entry.content}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;