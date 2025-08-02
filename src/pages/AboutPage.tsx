import  { FileText, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About Leapfrog Design</h1>
          <p className="text-xl max-w-3xl">
            Our mission is to accelerate the implementation of personalized treatment methods in routine clinical practice through innovative research and practical application.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-heading">Our Story</h2>
              <p className="text-gray-600 mb-4">
                The Leapfrog Design methodology was developed in response to a critical challenge in healthcare: the significant time lag between treatment development and widespread implementation.
              </p>
              <p className="text-gray-600 mb-4">
                Traditional approaches to clinical implementation follow a linear path from basic research to practice, often taking 15-20 years. Our team of researchers and clinicians recognized that this delay costs lives and diminishes quality of life for countless patients.
              </p>
              <p className="text-gray-600">
                By developing the Leapfrog Design, we've created a framework that allows for concurrent development, testing, and implementation while maintaining scientific rigor and patient safety.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800" 
                alt="Person using laptop for medical research" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="card text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Evidence-Based Innovation</h3>
              <p className="text-gray-600">
                We maintain scientific rigor while accelerating the implementation process. All methods are grounded in evidence and undergo systematic evaluation.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalization</h3>
              <p className="text-gray-600">
                One size does not fit all in healthcare. Our methodology enables the development of treatment approaches that adapt to individual patient needs, circumstances, and preferences.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-World Application</h3>
              <p className="text-gray-600">
                We design with implementation in mind from the start, considering real-world healthcare settings, resources, and constraints to ensure practicality.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="card text-center p-8">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
                  alt="Dr. Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 mb-4">Principal Investigator</p>
              <p className="text-gray-600">
                With over 15 years of experience in clinical research, Dr. Johnson leads our methodology development and implementation science initiatives.
              </p>
            </div>
            
            <div className="card text-center p-8">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
                  alt="Dr. Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Michael Chen</h3>
              <p className="text-blue-600 mb-4">Clinical Director</p>
              <p className="text-gray-600">
                A practicing clinician and researcher, Dr. Chen bridges the gap between research findings and practical clinical applications.
              </p>
            </div>
            
            <div className="card text-center p-8">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
                  alt="Dr. Emily Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Emily Rodriguez</h3>
              <p className="text-blue-600 mb-4">Research Methodologist</p>
              <p className="text-gray-600">
                Specializing in adaptive research designs, Dr. Rodriguez ensures our methodologies maintain scientific integrity while allowing for personalization.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We collaborate with leading healthcare institutions, research centers, and funding organizations to advance personalized treatment implementation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-32">
              <span className="text-xl font-bold text-gray-400">University Medical Center</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-32">
              <span className="text-xl font-bold text-gray-400">National Research Institute</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-32">
              <span className="text-xl font-bold text-gray-400">Healthcare Innovation Fund</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-32">
              <span className="text-xl font-bold text-gray-400">Global Health Initiative</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
 