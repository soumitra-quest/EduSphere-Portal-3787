import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBook, FaChartLine } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaGraduationCap className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-800">EduQuest</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/courses" className="flex items-center space-x-1 text-gray-600 hover:text-primary-600">
              <FaBook className="h-5 w-5" />
              <span>Courses</span>
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-primary-600">
              <FaChartLine className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}