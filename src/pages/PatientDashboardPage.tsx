import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calendar, MessageSquare, FileText, Bell, AlertCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { mockUsers, mockPatients, mockTreatmentPlans } from '../data/mockData';

const PatientDashboardPage = () => {
  // For this demo, we're using the first patient in our mock data
  const currentPatient = mockPatients[0];
  const currentUser = mockUsers.find(user => user.id === currentPatient.userId);
  const patientTreatmentPlan = mockTreatmentPlans.find(plan => plan.patientId === currentPatient.id);
  
  const [selectedTab, setSelectedTab] = useState<'overview' | 'treatments' | 'feedback'>('overview');
  
  // Mock data for charts (simplified)
  const painData = [4, 3, 3, 2, 2, 1, 2];
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });
  
  return (
    <div>
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Patient Dashboard</h1>
              <p className="text-xl">
                Welcome back, {currentUser?.name}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <div className="relative">
                <button className="p-2 bg-white bg-opacity-20 rounded-full">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={currentUser?.profileImage || "https://via.placeholder.com/40"} 
                  alt={currentUser?.name}
                  className="h-10 w-10 rounded-full border-2 border-white" 
                />
                <span className="font-medium">{currentUser?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setSelectedTab('overview')}
                className={`py-4 font-medium text-sm border-b-2 ${
                  selectedTab === 'overview' 
                    ? 'text-blue-600 border-blue-600' 
                    : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setSelectedTab('treatments')}
                className={`py-4 font-medium text-sm border-b-2 ${
                  selectedTab === 'treatments' 
                    ? 'text-blue-600 border-blue-600' 
                    : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600'
                }`}
              >
                Current Treatments
              </button>
              <button
                onClick={() => setSelectedTab('feedback')}
                className={`py-4 font-medium text-sm border-b-2 ${
                  selectedTab === 'feedback' 
                    ? 'text-blue-600 border-blue-600' 
                    : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600'
                }`}
              >
                Progress & Feedback
              </button>
            </div>
          </div>
          
          {selectedTab === 'overview' && (
            <div>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-blue-800">Active Treatment Plan</h3>
                    <Activity className="h-5 w-5 text-blue-600" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xl font-bold">{patientTreatmentPlan?.name}</div>
                    <div className="text-sm text-gray-600">Started {patientTreatmentPlan?.startDate.toLocaleDateString()}</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-full bg-blue-200 rounded-full h-2.5 mr-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-blue-800">60%</span>
                  </div>
                  
                  <Link to="#" className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    View Details <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-green-800">Upcoming Appointments</h3>
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="text-sm font-medium">Dr. Michael Chen</div>
                      <div className="text-xs text-gray-500">Tomorrow, 10:00 AM</div>
                      <div className="text-xs mt-1 text-green-600">Video Consultation</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="text-sm font-medium">Nutritional Consultation</div>
                      <div className="text-xs text-gray-500">May 28, 2:00 PM</div>
                      <div className="text-xs mt-1 text-green-600">In-person</div>
                    </div>
                  </div>
                  
                  <Link to="#" className="mt-4 text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                    Schedule Appointment <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-purple-800">Messages</h3>
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="text-sm font-medium">Dr. Michael Chen</div>
                      <div className="text-xs text-gray-500">2 hours ago</div>
                      <div className="text-xs mt-1 text-gray-700 truncate">How are you feeling after the medication adjustment?</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="text-sm font-medium">Nurse Williams</div>
                      <div className="text-xs text-gray-500">Yesterday</div>
                      <div className="text-xs mt-1 text-gray-700 truncate">Your lab results are ready for review</div>
                    </div>
                  </div>
                  
                  <Link to="#" className="mt-4 text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                    View All Messages <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Weekly Progress</h3>
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-600 mb-2">Pain Level (0-10 scale)</div>
                  <div className="h-32 flex items-end space-x-4">
                    {painData.map((value, index) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div className="w-full bg-blue-100 rounded-sm" style={{ height: `${value * 10}%` }}>
                          <div className="bg-blue-500 h-full w-full rounded-sm"></div>
                        </div>
                        <div className="text-xs mt-2 text-gray-500">{dates[index]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Avg. Pain Level</div>
                    <div className="text-2xl font-bold">2.4</div>
                    <div className="text-xs text-green-600">↓ 0.8 from last week</div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Medication Adherence</div>
                    <div className="text-2xl font-bold">92%</div>
                    <div className="text-xs text-green-600">↑ 5% from last week</div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Exercise Completion</div>
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-xs text-green-600">↑ 10% from last week</div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Blood Pressure</div>
                    <div className="text-2xl font-bold">128/82</div>
                    <div className="text-xs text-green-600">↓ 8/5 from last week</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Today's Tasks</h3>
                  <div className="text-sm text-blue-600">3 of 5 completed</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 border border-green-100 rounded-md">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <div>
                      <div className="text-sm font-medium line-through text-gray-500">Take morning medication</div>
                      <div className="text-xs text-gray-400">8:00 AM</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-green-50 border border-green-100 rounded-md">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <div>
                      <div className="text-sm font-medium line-through text-gray-500">Record blood pressure</div>
                      <div className="text-xs text-gray-400">8:15 AM</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-green-50 border border-green-100 rounded-md">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <div>
                      <div className="text-sm font-medium line-through text-gray-500">30-minute walking exercise</div>
                      <div className="text-xs text-gray-400">9:00 AM</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3" />
                    <div>
                      <div className="text-sm font-medium">Take evening medication</div>
                      <div className="text-xs text-gray-500">6:00 PM</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-md">
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-3"></div>
                    <div>
                      <div className="text-sm font-medium">Complete daily symptom journal</div>
                      <div className="text-xs text-gray-500">Before bed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {selectedTab === 'treatments' && (
            <div>
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Current Treatment Plan</h3>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b">
                  <div>
                    <div className="text-2xl font-bold mb-1">{patientTreatmentPlan?.name}</div>
                    <div className="text-gray-500">Started on {patientTreatmentPlan?.startDate.toLocaleDateString()}</div>
                    <div className="flex items-center mt-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-sm text-gray-500">Dr. Michael Chen</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <button className="btn-secondary mr-2">Download Plan</button>
                    <button className="btn-primary">Contact Doctor</button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-md font-semibold mb-3">Description</h4>
                  <p className="text-gray-600">{patientTreatmentPlan?.description}</p>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold mb-3">Prescribed Treatments</h4>
                  
                  <div className="space-y-4">
                    {patientTreatmentPlan?.treatments.map(treatment => (
                      <div key={treatment.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">{treatment.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{treatment.description}</div>
                          </div>
                          <div className="ml-4">
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
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3 text-sm">
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
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">Medication Schedule</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                      <div>
                        <div className="font-medium">Lisinopril 10mg</div>
                        <div className="text-sm text-gray-500">Daily at 8:00 AM</div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Taken Today</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                      <div>
                        <div className="font-medium">Cetirizine 10mg</div>
                        <div className="text-sm text-gray-500">As needed for allergies</div>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Not Taken Today</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold mb-4">Treatment Resources</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start p-3 bg-blue-50 rounded-md">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <div className="font-medium">Hypertension Management Guide</div>
                        <div className="text-sm text-gray-500 mb-2">PDF guide for managing hypertension through lifestyle changes</div>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Download PDF</button>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 bg-blue-50 rounded-md">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <div className="font-medium">Medication Information Sheet</div>
                        <div className="text-sm text-gray-500 mb-2">Detailed information about your prescribed medications</div>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View Document</button>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 bg-blue-50 rounded-md">
                      <Activity className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <div className="font-medium">Exercise Program Videos</div>
                        <div className="text-sm text-gray-500 mb-2">Guided exercise videos for your walking program</div>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Watch Videos</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {selectedTab === 'feedback' && (
            <div>
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                <h3 className="text-lg font-semibold mb-6">Submit Daily Feedback</h3>
                
                <form>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pain Level (0-10)
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="10" 
                        defaultValue="2"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0 (No Pain)</span>
                        <span>10 (Worst Pain)</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Today's Date
                      </label>
                      <input 
                        type="date" 
                        defaultValue={new Date().toISOString().split('T')[0]}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Symptoms (select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Headache</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Dizziness</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Fatigue</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Nausea</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Joint Pain</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Shortness of Breath</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Cough</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Other</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Side Effects (select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Dry Cough</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Drowsiness</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Stomach Pain</span>
                      </label>
                      <label className="inline-flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">Rash</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Provide any additional information about how you're feeling..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn-primary mr-2">Submit Feedback</button>
                    <button type="button" className="btn-secondary">Save Draft</button>
                  </div>
                </form>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Previous Feedback</h3>
                  <select className="border border-gray-300 rounded-md text-sm px-3 py-2">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>All time</option>
                  </select>
                </div>
                
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-medium">May 15, 2023</div>
                      <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Improved</div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm text-gray-500">Pain Level</div>
                        <div className="font-semibold">2/10</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Symptoms</div>
                        <div className="font-semibold">Mild headache</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Side Effects</div>
                        <div className="font-semibold">Dry cough</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <strong>Notes:</strong> Blood pressure readings have been more stable. Headache only occurred once this week and was mild.
                    </div>
                  </div>
                  
                  <div className="border-b pb-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-medium">May 8, 2023</div>
                      <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Moderate</div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm text-gray-500">Pain Level</div>
                        <div className="font-semibold">4/10</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Symptoms</div>
                        <div className="font-semibold">Headache, Dizziness</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Side Effects</div>
                        <div className="font-semibold">Dry cough, Fatigue</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <strong>Notes:</strong> Experienced dizziness when standing up quickly. Headache was more frequent but responded well to rest.
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-medium">May 1, 2023</div>
                      <div className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Concerning</div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm text-gray-500">Pain Level</div>
                        <div className="font-semibold">6/10</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Symptoms</div>
                        <div className="font-semibold">Severe headache, Dizziness</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Side Effects</div>
                        <div className="font-semibold">Dry cough, Nausea</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <strong>Notes:</strong> Started new medication. Experienced strong headache and some nausea after taking the first dose. Contacted Dr. Chen who advised to continue but monitor symptoms closely.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PatientDashboardPage;
 