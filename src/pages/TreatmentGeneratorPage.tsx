import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sliders, FileText, Activity, AlertCircle, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { mockPatients, mockTreatments } from '../data/mockData';

type PatientProfile = {
  age: number;
  gender: 'male' | 'female' | 'other';
  medicalHistory: string[];
  currentMedications: string[];
  allergies: string[];
  symptoms: string[];
  lifestyle: string[];
  preferences: string[];
};

const TreatmentGeneratorPage = () => {
  const [step, setStep] = useState(1);
  const [selectedPatient, setSelectedPatient] = useState(mockPatients[0]);
  const [patientProfile, setPatientProfile] = useState<PatientProfile>({
    age: 45,
    gender: 'male',
    medicalHistory: mockPatients[0].medicalHistory,
    currentMedications: mockPatients[0].currentMedications,
    allergies: mockPatients[0].allergies,
    symptoms: mockPatients[0].symptoms,
    lifestyle: ['Sedentary job', 'Occasional exercise (1-2 times/week)', 'Non-smoker'],
    preferences: ['Prefers morning medication', 'Interested in lifestyle modifications', 'Concerned about medication side effects']
  });
  
  const [openSections, setOpenSections] = useState({
    medications: true,
    lifestyle: true,
    therapy: true
  });
  
  const [selectedTreatments, setSelectedTreatments] = useState([
    mockTreatments[0],
    mockTreatments[1]
  ]);
  
  const [generatedPlan, setGeneratedPlan] = useState({
    name: 'Personalized Hypertension Management Plan',
    treatments: selectedTreatments,
    goals: [
      'Reduce blood pressure to below 130/80 mmHg',
      'Minimize headache frequency and severity',
      'Improve overall cardiovascular health'
    ],
    adaptationPoints: [
      'If dry cough persists for more than 2 weeks, consider alternative ACE inhibitor',
      'Adjust walking intensity based on weekly pain levels',
      'Consider adding stress management techniques if headaches persist'
    ]
  });
  
  const toggleSection = (section: 'medications' | 'lifestyle' | 'therapy') => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  return (
    <div>
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Personalized Treatment Generator</h1>
          <p className="text-xl max-w-3xl">
            Generate adaptive, personalized treatment plans using the Leapfrog Design methodology for improved patient outcomes.
          </p>
        </div>
      </section>
      
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Treatment Plan Generation</h2>
              <div className="text-sm text-gray-500">Step {step} of 4</div>
            </div>
            
            <div className="relative">
              <div className="overflow-hidden h-2 mb-4 flex rounded bg-gray-200">
                <div style={{ width: `${step * 25}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
              </div>
              <div className="flex justify-between">
                <div className={`text-xs ${step >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Patient Selection</div>
                <div className={`text-xs ${step >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Profile Customization</div>
                <div className={`text-xs ${step >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Treatment Selection</div>
                <div className={`text-xs ${step >= 4 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Plan Review</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg border">
            {/* Step 1: Patient Selection */}
            {step === 1 && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Select Patient</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer ${selectedPatient.id === '1' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    onClick={() => setSelectedPatient(mockPatients[0])}
                  >
                    <div className="flex items-center mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzQ0Njk4OTM4fDA&ixlib=rb-4.0.3"
                        alt="John Doe" 
                        className="h-10 w-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-gray-500">45, Male</div>
                      </div>
                      {selectedPatient.id === '1' && (
                        <CheckCircle className="ml-auto h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Primary Condition:</span> Hypertension
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Current Medications:</span> Lisinopril 10mg, Cetirizine 10mg
                    </div>
                  </div>
                  
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer ${selectedPatient.id === '2' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    onClick={() => setSelectedPatient(mockPatients[1])}
                  >
                    <div className="flex items-center mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxwYXRpZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzQ0Njk4OTM4fDA&ixlib=rb-4.0.3"
                        alt="Jane Smith" 
                        className="h-10 w-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-gray-500">52, Female</div>
                      </div>
                      {selectedPatient.id === '2' && (
                        <CheckCircle className="ml-auto h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Primary Condition:</span> Type 2 Diabetes
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Current Medications:</span> Metformin 500mg, Vitamin D
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="btn-secondary opacity-50 cursor-not-allowed">
                    Previous
                  </button>
                  <button className="btn-primary" onClick={nextStep}>
                    Next: Customize Profile
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Profile Customization */}
            {step === 2 && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Customize Patient Profile</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-md font-medium mb-3">Patient Information</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                        <input 
                          type="number" 
                          value={patientProfile.age}
                          onChange={e => setPatientProfile({...patientProfile, age: parseInt(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select 
                          value={patientProfile.gender}
                          onChange={e => setPatientProfile({...patientProfile, gender: e.target.value as any})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium mb-3">Medical History</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Medical Conditions</label>
                        <textarea 
                          value={patientProfile.medicalHistory.join('\n')}
                          onChange={e => setPatientProfile({...patientProfile, medicalHistory: e.target.value.split('\n')})}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Medications</label>
                        <textarea 
                          value={patientProfile.currentMedications.join('\n')}
                          onChange={e => setPatientProfile({...patientProfile, currentMedications: e.target.value.split('\n')})}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-md font-medium mb-3">Symptoms & Allergies</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Symptoms</label>
                        <textarea 
                          value={patientProfile.symptoms.join('\n')}
                          onChange={e => setPatientProfile({...patientProfile, symptoms: e.target.value.split('\n')})}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
                        <textarea 
                          value={patientProfile.allergies.join('\n')}
                          onChange={e => setPatientProfile({...patientProfile, allergies: e.target.value.split('\n')})}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium mb-3">Lifestyle & Preferences</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Lifestyle Factors</label>
                        <textarea 
                          value={patientProfile.lifestyle.join('\n')}
                          onChange={e => setPatientProfile({...patientProfile, lifestyle: e.target.value.split('\n')})}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Patient Preferences</label>
                        <textarea 
                          value={patientProfile.preferences.join('\n')}
                          onChange={e => setPatientProfile({...patientProfile, preferences: e.target.value.split('\n')})}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={prevStep}>
                    Previous
                  </button>
                  <button className="btn-primary" onClick={nextStep}>
                    Next: Select Treatments
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Treatment Selection */}
            {step === 3 && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Select Treatments</h3>
                
                <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">Personalized Treatment Recommendation</h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>Based on the patient profile, the following treatment components are recommended. You can customize this selection based on clinical judgment.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mb-6">
                  {/* Medications Section */}
                  <div className="border rounded-md overflow-hidden">
                    <div 
                      className="flex items-center justify-between bg-gray-50 p-4 cursor-pointer"
                      onClick={() => toggleSection('medications')}
                    >
                      <div className="font-medium">Medications</div>
                      <div>
                        {openSections.medications ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                    
                    {openSections.medications && (
                      <div className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="med1"
                              checked={selectedTreatments.some(t => t.id === '1')}
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="med1" className="ml-3 block">
                              <span className="font-medium">Lisinopril 10mg</span>
                              <span className="block text-sm text-gray-500">ACE inhibitor for blood pressure management</span>
                            </label>
                          </div>
                          
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="med2"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="med2" className="ml-3 block">
                              <span className="font-medium">Hydrochlorothiazide 12.5mg</span>
                              <span className="block text-sm text-gray-500">Diuretic for blood pressure management</span>
                            </label>
                          </div>
                          
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="med3"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="med3" className="ml-3 block">
                              <span className="font-medium">Atorvastatin 10mg</span>
                              <span className="block text-sm text-gray-500">Statin medication for cholesterol management</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Lifestyle Modifications Section */}
                  <div className="border rounded-md overflow-hidden">
                    <div 
                      className="flex items-center justify-between bg-gray-50 p-4 cursor-pointer"
                      onClick={() => toggleSection('lifestyle')}
                    >
                      <div className="font-medium">Lifestyle Modifications</div>
                      <div>
                        {openSections.lifestyle ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                    
                    {openSections.lifestyle && (
                      <div className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="life1"
                              checked={selectedTreatments.some(t => t.id === '2')}
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="life1" className="ml-3 block">
                              <span className="font-medium">Walking Exercise</span>
                              <span className="block text-sm text-gray-500">30 minutes, 5 days a week</span>
                            </label>
                          </div>
                          
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="life2"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="life2" className="ml-3 block">
                              <span className="font-medium">DASH Diet</span>
                              <span className="block text-sm text-gray-500">Dietary approach to stop hypertension</span>
                            </label>
                          </div>
                          
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="life3"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="life3" className="ml-3 block">
                              <span className="font-medium">Stress Reduction Techniques</span>
                              <span className="block text-sm text-gray-500">Mindfulness meditation, 10 minutes daily</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Therapies Section */}
                  <div className="border rounded-md overflow-hidden">
                    <div 
                      className="flex items-center justify-between bg-gray-50 p-4 cursor-pointer"
                      onClick={() => toggleSection('therapy')}
                    >
                      <div className="font-medium">Additional Therapies</div>
                      <div>
                        {openSections.therapy ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                    
                    {openSections.therapy && (
                      <div className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="therapy1"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="therapy1" className="ml-3 block">
                              <span className="font-medium">Nutrition Counseling</span>
                              <span className="block text-sm text-gray-500">Monthly sessions with registered dietitian</span>
                            </label>
                          </div>
                          
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="therapy2"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <label htmlFor="therapy2" className="ml-3 block">
                              <span className="font-medium">Blood Pressure Monitoring</span>
                              <span className="block text-sm text-gray-500">Self-monitoring twice daily with electronic log</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={prevStep}>
                    Previous
                  </button>
                  <button className="btn-primary" onClick={nextStep}>
                    Next: Review Plan
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 4: Plan Review */}
            {step === 4 && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Review Generated Treatment Plan</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-blue-800">{generatedPlan.name}</h4>
                      <div className="text-sm text-gray-500">Generated using Leapfrog Design methodology</div>
                    </div>
                    <div className="flex">
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md mr-2">
                        <FileText className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md">
                        <Sliders className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b">
                    <h5 className="font-medium mb-2">Patient Information</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Name: <span className="text-gray-900">John Doe</span></div>
                        <div className="text-gray-600">Age: <span className="text-gray-900">{patientProfile.age}</span></div>
                        <div className="text-gray-600">Gender: <span className="text-gray-900">{patientProfile.gender}</span></div>
                      </div>
                      <div>
                        <div className="text-gray-600">Primary Condition: <span className="text-gray-900">Hypertension</span></div>
                        <div className="text-gray-600">Date Created: <span className="text-gray-900">{new Date().toLocaleDateString()}</span></div>
                        <div className="text-gray-600">Provider: <span className="text-gray-900">Dr. Michael Chen</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b">
                    <h5 className="font-medium mb-2">Treatment Components</h5>
                    
                    <div className="space-y-4">
                      {generatedPlan.treatments.map((treatment, index) => (
                        <div key={index} className="bg-white p-3 rounded border">
                          <div className="flex justify-between">
                            <div className="font-medium">{treatment.name}</div>
                            <div>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                treatment.type === 'medication' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : treatment.type === 'therapy' 
                                  ? 'bg-purple-100 text-purple-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {treatment.type}
                              </span>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{treatment.description}</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-xs">
                            {treatment.dosage && (
                              <div>
                                <span className="text-gray-500">Dosage:</span> {treatment.dosage}
                              </div>
                            )}
                            {treatment.frequency && (
                              <div>
                                <span className="text-gray-500">Frequency:</span> {treatment.frequency}
                              </div>
                            )}
                            {treatment.duration && (
                              <div>
                                <span className="text-gray-500">Duration:</span> {treatment.duration}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b">
                    <h5 className="font-medium mb-2">Treatment Goals</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {generatedPlan.goals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Leapfrog Adaptation Points</h5>
                    <p className="text-sm text-gray-600 mb-3">These are predefined decision points for personalizing treatment based on patient response.</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                      {generatedPlan.adaptationPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={prevStep}>
                    Previous
                  </button>
                  <div>
                    <button className="btn-secondary mr-2">
                      Save as Draft
                    </button>
                    <button className="btn-primary">
                      Finalize Plan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">How the Leapfrog Design Methodology Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient-Centered Approach</h3>
              <p className="text-gray-600 mb-4">
                We start with comprehensive patient profiles that include not just medical data, but lifestyle factors and personal preferences.
              </p>
              <p className="text-gray-600">
                This enables truly personalized treatment plans that patients are more likely to follow consistently.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Sliders className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Structured Adaptation</h3>
              <p className="text-gray-600 mb-4">
                Each plan includes predefined adaptation points - specific criteria for when and how to modify the treatment based on patient response.
              </p>
              <p className="text-gray-600">
                This enables rapid refinement without compromising clinical integrity or patient safety.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Regular feedback collection and outcome tracking are built into every plan, ensuring we capture real-world effectiveness.
              </p>
              <p className="text-gray-600">
                This data-driven approach enables continuous improvement of both individual plans and our treatment methodologies.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/methodology" className="btn-primary inline-flex items-center">
              Learn More About Leapfrog Design <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentGeneratorPage;
 