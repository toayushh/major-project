import  ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, FileText, Calendar, Users } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions about implementing the Leapfrog Design in your organization? Our team is here to help.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're interested in implementing the Leapfrog Design, participating in research, or learning more about our methodology, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@leapfrog-treatment.org" className="text-blue-600 hover:text-blue-800">
                        info@leapfrog-treatment.org
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Research Avenue<br />
                      Medical District<br />
                      Boston, MA 02115
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">How We Can Help</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 text-blue-600 mr-2">
                      <FileText className="h-5 w-5" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Implementation Consultation</span> - Guidance on adapting the Leapfrog Design for your specific clinical context.
                    </p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 text-blue-600 mr-2">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Training Workshops</span> - Hands-on training for clinical teams in personalized treatment implementation.
                    </p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 text-blue-600 mr-2">
                      <Users className="h-5 w-5" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Research Collaboration</span> - Partnership opportunities for advancing personalized treatment research.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto mt-8 text-left">
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">What organizations can benefit from the Leapfrog Design?</h3>
                <p className="text-gray-600">
                  The Leapfrog Design can benefit any healthcare organization looking to implement evidence-based, personalized treatments more efficiently. This includes hospitals, outpatient clinics, integrated health systems, and community health centers.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">What resources are needed to implement the Leapfrog Design?</h3>
                <p className="text-gray-600">
                  Implementation typically requires clinical champions, data collection capabilities, and organizational support for a more flexible treatment approach. Our team can help assess your organization's readiness and resource needs.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">How long does implementation typically take?</h3>
                <p className="text-gray-600">
                  The initial implementation process typically takes 6-12 months, though this varies based on organizational factors and the specific treatment approach. The Leapfrog Design is significantly faster than traditional implementation approaches.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">Is the Leapfrog Design compatible with existing quality improvement initiatives?</h3>
                <p className="text-gray-600">
                  Yes, the methodology can integrate with existing quality improvement frameworks and often enhances their effectiveness by providing a structured approach to treatment personalization and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
 