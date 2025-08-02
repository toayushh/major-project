import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Activity, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-blue-800">Leapfrog</span>
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>About</NavLink>
            <NavLink to="/methodology" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Methodology</NavLink>
            <NavLink to="/cases" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Case Studies</NavLink>
            <NavLink to="/tools" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Interactive Tools</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Contact</NavLink>
            
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <span>Dashboards</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link 
                    to="/patient-dashboard" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Patient Dashboard
                  </Link>
                  <Link 
                    to="/admin-dashboard" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Admin Dashboard
                  </Link>
                  <Link 
                    to="/analytics" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Analytics
                  </Link>
                  <Link 
                    to="/treatment-generator" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Treatment Generator
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <NavLink to="/" className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-blue-600 font-medium" : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-blue-600 font-medium" : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>About</NavLink>
            <NavLink to="/methodology" className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-blue-600 font-medium" : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Methodology</NavLink>
            <NavLink to="/cases" className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-blue-600 font-medium" : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Case Studies</NavLink>
            <NavLink to="/tools" className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-blue-600 font-medium" : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Interactive Tools</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-blue-600 font-medium" : "block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Contact</NavLink>
            
            <div className="border-t mt-2 pt-2">
              <div className="px-3 py-2 text-gray-600 font-medium">Dashboards</div>
              <NavLink to="/patient-dashboard" className={({isActive}) => isActive ? "block px-3 py-2 pl-6 rounded-md text-blue-600 font-medium" : "block px-3 py-2 pl-6 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Patient Dashboard</NavLink>
              <NavLink to="/admin-dashboard" className={({isActive}) => isActive ? "block px-3 py-2 pl-6 rounded-md text-blue-600 font-medium" : "block px-3 py-2 pl-6 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Admin Dashboard</NavLink>
              <NavLink to="/analytics" className={({isActive}) => isActive ? "block px-3 py-2 pl-6 rounded-md text-blue-600 font-medium" : "block px-3 py-2 pl-6 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Analytics</NavLink>
              <NavLink to="/treatment-generator" className={({isActive}) => isActive ? "block px-3 py-2 pl-6 rounded-md text-blue-600 font-medium" : "block px-3 py-2 pl-6 rounded-md text-gray-600 hover:bg-gray-50 hover:text-blue-600"} onClick={toggleMenu}>Treatment Generator</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 