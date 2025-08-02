import  { Activity, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-6 w-6" />
              <span className="font-bold text-xl">Leapfrog</span>
            </div>
            <p className="text-gray-300 mb-4">
              Advancing personalized treatment methods through innovative research and implementation strategies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/methodology" className="text-gray-300 hover:text-white">Methodology</a></li>
              <li><a href="/cases" className="text-gray-300 hover:text-white">Case Studies</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-300" />
                <a href="mailto:info@leapfrog-treatment.org" className="text-gray-300 hover:text-white">info@leapfrog-treatment.org</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">123 Research Ave, Medical District</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-800 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Leapfrog Treatment Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 