import  { ArrowRight, Activity, Users, FileText, Settings, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Revolutionizing Treatment Implementation</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              The Leapfrog Design accelerates the translation of evidence-based treatments into routine clinical practice through a systematic, iterative approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Evidence-Based"
              description="Grounded in scientific evidence and validated research to ensure treatment effectiveness."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Patient-Centered"
              description="Tailored to individual patient needs, preferences, and unique circumstances."
            />
            <FeatureCard
              icon={<Settings className="h-6 w-6" />}
              title="Adaptable Design"
              description="Flexible implementation that can be adjusted based on clinical feedback and outcomes."
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="Rapid Iteration"
              description="Faster development-to-implementation cycle compared to traditional clinical approaches."
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="section-heading">Our Approach</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Leapfrog Design methodology bridges the gap between research and practice by systematically developing, testing, and implementing personalized treatment approaches.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Unlike traditional linear models, our approach enables concurrent development and testing, dramatically reducing the time from conception to implementation.
              </p>
              <Link to="/methodology" className="btn-primary inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHJlc2VhcmNofGVufDB8fHx8MTc0NDY1Njc0MXww&ixlib=rb-4.0.3" 
                alt="Brain model representing personalized treatment approach" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Try Our Interactive Tools</h2>
              <p className="text-xl mb-6">
                Explore our AI-powered tools to learn more about personalized treatment approaches and get answers to your questions.
              </p>
              <Link to="/tools" className="bg-white text-blue-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors inline-flex items-center">
                Explore Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhaSUyMGFzc2lzdGFudCUyMGNoYXRib3QlMjBpY29ufGVufDB8fHx8MTc0NDY5NTI4NXww&ixlib=rb-4.0.3&fit=fillmax&h=200&w=200" 
                alt="AI Assistant" 
                className="h-32 w-32 rounded-full border-4 border-white shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Ready to Transform Treatment Implementation?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join healthcare providers and researchers already using the Leapfrog Design to deliver personalized, effective treatments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Our Team
            </Link>
            <Link to="/cases" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Latest Publications</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Recent research and findings on the Leapfrog Design methodology and its applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Accelerating Clinical Practice Through Leapfrog Design</h3>
              <p className="text-gray-500 mb-4">Journal of Medical Implementation, 2023</p>
              <p className="text-gray-600 mb-4">
                A comprehensive review of how the Leapfrog Design methodology reduces implementation time while maintaining treatment efficacy.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Read Abstract <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Personalized Treatment Pathways: A Case Series</h3>
              <p className="text-gray-500 mb-4">Clinical Research Quarterly, 2022</p>
              <p className="text-gray-600 mb-4">
                Five case studies demonstrating successful application of personalized treatment methods using the Leapfrog approach.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Read Abstract <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Stakeholder Perspectives on Leapfrog Implementation</h3>
              <p className="text-gray-500 mb-4">Healthcare Innovation Journal, 2023</p>
              <p className="text-gray-600 mb-4">
                Qualitative analysis of provider, patient, and administrator experiences with the Leapfrog Design methodology.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Read Abstract <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
 