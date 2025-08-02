import  CaseStudyCard from '../components/CaseStudyCard';

const CasesPage = () => {
  return (
    <div>
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl max-w-3xl">
            Explore real-world examples of the Leapfrog Design methodology in action across various healthcare contexts.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Featured Case Studies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <CaseStudyCard
              title="Personalized Pain Management Protocol"
              description="Implementation of an adaptive pain management approach in a community hospital setting, reducing opioid use while improving patient satisfaction."
              imageUrl="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              outcomes={[
                "32% reduction in opioid prescription",
                "18% improvement in pain management scores",
                "Implementation completed in 9 months vs. typical 3+ years"
              ]}
            />
            
            <CaseStudyCard
              title="Adaptive Behavioral Health Intervention"
              description="Development and implementation of a flexible cognitive-behavioral therapy protocol for anxiety disorders in primary care settings."
              imageUrl="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              outcomes={[
                "Accessible treatment for 3x more patients",
                "Comparable outcomes to specialist-delivered therapy",
                "Successful implementation across 12 diverse clinics"
              ]}
            />
            
            <CaseStudyCard
              title="Personalized Diabetes Management"
              description="Implementation of a technology-supported, personalized diabetes management program in a rural healthcare network."
              imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              outcomes={[
                "1.2% average reduction in HbA1c levels",
                "65% improvement in medication adherence",
                "Reduced disparity in outcomes across socioeconomic groups"
              ]}
            />
            
            <CaseStudyCard
              title="Adaptive Physical Therapy Protocol"
              description="Development and implementation of a personalized physical therapy approach for chronic back pain in outpatient settings."
              imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw4fHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              outcomes={[
                "40% reduction in pain scores within 8 weeks",
                "28% fewer therapy sessions needed vs. standard protocol",
                "Higher therapist satisfaction and protocol adherence"
              ]}
            />
            
            <CaseStudyCard
              title="Personalized Stroke Recovery Program"
              description="Implementation of an adaptive rehabilitation approach for stroke survivors in an integrated health system."
              imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwcGVyc29uYWxpemVkJTIwdHJlYXRtZW50JTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NzAwNjQyfDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              outcomes={[
                "22% improvement in functional independence measures",
                "Reduced hospital readmission rates by 35%",
                "Implementation completed within 12 months"
              ]}
            />
            
            <CaseStudyCard
              title="Precision Medication Management"
              description="Development and implementation of a pharmacogenomic-informed medication selection and dosing protocol in a healthcare system."
              imageUrl="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxMHx8aGVhbHRoY2FyZSUyMHBlcnNvbmFsaXplZCUyMHRyZWF0bWVudCUyMG1lZGljYWwlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc0NDcwMDY0Mnww&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800"
              outcomes={[
                "42% reduction in adverse medication events",
                "38% fewer medication changes needed",
                "Cost savings of $320 per patient annually"
              ]}
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Implementation Insights</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Success Factors</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Stakeholder Engagement</p>
                    <p className="text-gray-600">Early and continuous involvement of clinicians, administrators, and patients in the design process.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Structured Flexibility</p>
                    <p className="text-gray-600">Clear core components with explicit decision points for personalization based on patient characteristics.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Continuous Monitoring</p>
                    <p className="text-gray-600">Robust data collection systems that support real-time adaptation and improvement.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Implementation Support</p>
                    <p className="text-gray-600">Dedicated resources for training, technical assistance, and adaptation during implementation.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Common Challenges</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-semibold">Balancing Structure and Flexibility</p>
                    <p className="text-gray-600">Finding the right balance between standardized protocols and personalized adaptation.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-semibold">Clinical Workflow Integration</p>
                    <p className="text-gray-600">Ensuring that personalized approaches integrate smoothly with existing clinical workflows.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-semibold">Data Collection Burden</p>
                    <p className="text-gray-600">Managing the tension between comprehensive data collection and clinical efficiency.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-semibold">Organizational Readiness</p>
                    <p className="text-gray-600">Addressing organizational barriers to implementing more flexible treatment approaches.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasesPage;
 