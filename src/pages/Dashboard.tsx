import { TrophyIcon, FlagIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Points',
      value: '2,450',
      subtitle: 'Level 5 Achiever',
      icon: TrophyIcon,
    },
    {
      title: 'Active Goals',
      value: '8',
      subtitle: '2 nearly complete',
      icon: FlagIcon,
    },
    {
      title: 'Skills Improved',
      value: '12',
      subtitle: 'This month',
      icon: ChartBarIcon,
    },
    {
      title: 'Study Groups',
      value: '3',
      subtitle: 'Active memberships',
      icon: UserGroupIcon,
    },
  ];

  const skillProgress = [
    { name: 'Critical Thinking', progress: 75, color: 'bg-blue-500' },
    { name: 'Time Management', progress: 60, color: 'bg-green-500' },
    { name: 'Data Analysis', progress: 45, color: 'bg-blue-500' },
    { name: 'Communication', progress: 85, color: 'bg-green-500' },
  ];

  const recentActivity = [
    {
      title: 'Completed Python Course',
      time: '2 hours ago',
      points: 100,
    },
    {
      title: 'Group Study Session',
      time: 'Yesterday',
      points: 50,
    },
    {
      title: 'New Goal Created',
      time: '2 days ago',
      points: 25,
    },
    {
      title: 'Badge Earned: Team Player',
      time: '3 days ago',
      points: 75,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
        <p className="text-gray-600">Track your progress and achieve your goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4">
              <stat.icon className="h-8 w-8 text-indigo-600" />
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Skill Progress</h2>
          <div className="space-y-4">
            {skillProgress.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${skill.color} h-2 rounded-full`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{activity.title}</div>
                  <div className="text-sm text-gray-600">{activity.time}</div>
                </div>
                <div className="text-green-600">+{activity.points}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;