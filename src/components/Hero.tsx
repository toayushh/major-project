import  { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-blue-800 text-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
          alt="Healthcare professionals team" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Leapfrog Design for Personalized Treatment Methods</h1>
          <p className="text-xl mb-8">
            Accelerating the development, testing, and implementation of personalized treatment approaches in routine clinical practice.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/methodology" className="btn-primary flex items-center">
              Explore Methodology <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/patient-dashboard" className="btn-secondary">
              Patient Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
 