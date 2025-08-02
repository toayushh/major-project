import  MethodStep from '../components/MethodStep';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MethodologyPage = () => {
  return (
    <div>
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">The Leapfrog Design Methodology</h1>
          <p className="text-xl max-w-3xl">
            A systematic approach to developing, testing, and implementing personalized treatment methods in routine clinical practice.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-heading">The Challenge</h2>
              <p className="text-gray-600 mb-4">
                Traditional models of treatment development and implementation follow a linear path: from basic research to efficacy trials, effectiveness studies, and finally dissemination into clinical practice.
              </p>
              <p className="text-gray-600 mb-4">
                This process typically takes 15-20 years, creates a significant gap between research and practice, and often fails to account for individual patient differences.
              </p>
              <p className="text-gray-600">
                The Leapfrog Design addresses these challenges by enabling concurrent development, testing, and implementation while maintaining scientific rigor and personalizing treatment approaches.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800" 
                alt="Data-driven healthcare approach" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">The Leapfrog Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Our methodology follows a structured yet flexible process that enables personalization while maintaining scientific integrity.
          </p>
          
          <div className="space-y-12 max-w-3xl mx-auto">
            <MethodStep
              number={1}
              title="Identify Clinical Need"
              description="Define the specific treatment challenge and target population based on clinical needs and gaps in current practice."
            />
            
            <MethodStep
              number={2}
              title="Develop Core Treatment Components"
              description="Identify evidence-based treatment elements that can address the clinical need while allowing for personalization."
            />
            
            <MethodStep
              number={3}
              title="Create Decision Framework"
              description="Develop protocols for personalizing treatment based on individual patient characteristics, preferences, and ongoing response to treatment."
            />
            
            <MethodStep
              number={4}
              title="Implement in Limited Settings"
              description="Deploy the personalized treatment approach in controlled clinical settings with close monitoring and ongoing assessment."
            />
            
            <MethodStep
              number={5}
              title="Collect and Analyze Data"
              description="Gather real-time data on treatment implementation, patient outcomes, and contextual factors affecting implementation."
            />
            
            <MethodStep
              number={6}
              title="Refine and Adapt"
              description="Modify treatment components and personalization framework based on implementation data and clinical feedback."
            />
            
            <MethodStep
              number={7}
              title="Expand Implementation"
              description="Gradually roll out the refined approach to additional clinical settings with appropriate training and support."
            />
            
            <MethodStep
              number={8}
              title="Continuous Improvement"
              description="Maintain ongoing data collection and periodic refinement to ensure sustained effectiveness and adaptability."
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Key Innovations</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Concurrent Development and Testing</h3>
              <p className="text-gray-600">
                Rather than waiting for the completion of large-scale clinical trials before beginning implementation, the Leapfrog Design allows for simultaneous refinement and limited implementation, dramatically reducing time-to-practice.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Adaptive Decision-Making</h3>
              <p className="text-gray-600">
                Our methodology incorporates structured decision points that allow clinicians to personalize treatment based on patient characteristics and ongoing response, rather than following a rigid protocol.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Real-World Testing</h3>
              <p className="text-gray-600">
                By testing treatments in actual clinical settings rather than highly controlled research environments, we ensure that approaches are practical, implementable, and effective in routine practice.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Iterative Refinement</h3>
              <p className="text-gray-600">
                The methodology incorporates continuous feedback loops and data collection, allowing for ongoing improvement of both treatment components and implementation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Implement the Leapfrog Design?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team provides training, consultation, and support for healthcare organizations interested in adopting the Leapfrog Design methodology.
          </p>
          <Link to="/contact" className="bg-white text-blue-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors inline-flex items-center">
            Contact Us for Implementation Support <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MethodologyPage;
 