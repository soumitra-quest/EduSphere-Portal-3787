import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProgressChart from '../components/ProgressChart';
import ProgressCard from '../components/ProgressCard';
import { useProgress } from '../hooks/useProgress';

export default function Dashboard() {
  const [selectedCourse, setSelectedCourse] = useState(1);
  const { progress } = useProgress(selectedCourse);
  const [studyData, setStudyData] = useState([]);

  useEffect(() => {
    // Simulate fetching study data
    setStudyData([2, 4, 3, 5, 3, 6, 4]);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 65,
      nextLesson: "CSS Layouts"
    },
    {
      id: 2,
      title: "Data Science Essentials",
      progress: 30,
      nextLesson: "Data Visualization"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(Number(e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {courses.map(course => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Activity</h2>
          <ProgressChart data={studyData} />
        </motion.div>

        <div className="space-y-8">
          <ProgressCard progress={progress} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h2>
            <div className="space-y-4">
              {progress.milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className={`${milestone.completed ? 'text-gray-500' : 'text-gray-900'}`}>
                    {milestone.name}
                  </span>
                  {milestone.completed && (
                    <span className="text-primary-600">✓</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}