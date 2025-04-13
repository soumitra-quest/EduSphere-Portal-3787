import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaBrain, FaUsers } from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      icon: <FaRocket className="h-6 w-6 text-primary-600" />,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with flexible schedules"
    },
    {
      icon: <FaBrain className="h-6 w-6 text-primary-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals"
    },
    {
      icon: <FaUsers className="h-6 w-6 text-primary-600" />,
      title: "Community Support",
      description: "Join a community of learners"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Transform Your Future with Online Learning
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Access world-class education from anywhere in the world
        </p>
        <Link
          to="/courses"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition duration-300"
        >
          Explore Courses
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}