import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaChartLine, FaBook } from 'react-icons/fa';

export default function CourseDetail() {
  const { id } = useParams();

  // Simulated course data
  const course = {
    id: parseInt(id),
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript. This comprehensive course will take you from beginner to confident web developer.",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=400",
    modules: [
      "Introduction to HTML",
      "CSS Styling",
      "JavaScript Basics",
      "DOM Manipulation",
      "Responsive Design",
      "Basic Web Projects"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center text-gray-600">
              <FaClock className="h-5 w-5 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaChartLine className="h-5 w-5 mr-2" />
              <span>{course.level}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            {course.description}
          </p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Course Modules
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <FaBook className="h-4 w-4 text-primary-600" />
                  <span>{module}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition duration-300">
            Enroll Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}