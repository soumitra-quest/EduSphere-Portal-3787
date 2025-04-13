import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2,
    title: "Data Science Essentials",
    description: "Master the fundamentals of data analysis and visualization",
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Create cross-platform mobile applications",
    duration: "12 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=400&h=250"
  }
];

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{course.duration}</span>
                <span className="text-sm text-primary-600">{course.level}</span>
              </div>
              <Link
                to={`/courses/${course.id}`}
                className="block w-full text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition duration-300"
              >
                View Course
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}