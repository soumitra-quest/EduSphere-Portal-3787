import { motion } from 'framer-motion';
import { FaClock, FaTrophy, FaCalendar } from 'react-icons/fa';

export default function ProgressCard({ progress }) {
  const { completion, lastActivity, timeSpent, milestones } = progress;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Course Progress</h3>
        <span className="text-2xl font-bold text-primary-600">{completion}%</span>
      </div>

      <div className="space-y-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completion}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-primary-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <FaClock className="h-5 w-5 text-primary-600" />
            <span>{Math.round(timeSpent / 60)} hours spent</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FaTrophy className="h-5 w-5 text-primary-600" />
            <span>{milestones.filter(m => m.completed).length} milestones</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <FaCalendar className="h-4 w-4" />
          <span>Last activity: {new Date(lastActivity).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  );
}