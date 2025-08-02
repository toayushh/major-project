import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Settings, FileText, Database, Bell, Search, Menu, ChevronDown, Activity, Clock, RefreshCw, Check } from 'lucide-react';
import UserManagement from '../components/UserManagement';
import { mockUsers, mockTreatmentPlans } from '../data/mockData';

type AdminTab = 'overview' | 'users' | 'treatments' | 'reports' | 'settings';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-2 font-bold text-xl text-blue-800">
                Leapfrog Admin
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="relative mr-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center text-sm px-3 py-2 border border-transparent rounded-md hover:bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NDQ2OTg5OTh8MA&ixlib=rb-4.0.3"
                    alt="Admin"
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <span className="mr-1">Admin</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="md:hidden p-4 border-b">
                <button className="flex items-center text-gray-700">
                  <Menu className="h-5 w-5 mr-2" />
                  <span>Menu</span>
                </button>
              </div>
              <nav className="p-4">
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'overview'
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Activity className="h-5 w-5 mr-3" />
                    Dashboard Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('users')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'users'
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Users className="h-5 w-5 mr-3" />
                    User Management
                  </button>
                  <button
                    onClick={() => setActiveTab('treatments')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'treatments'
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FileText className="h-5 w-5 mr-3" />
                    Treatment Plans
                  </button>
                  <button
                    onClick={() => setActiveTab('reports')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'reports'
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Database className="h-5 w-5 mr-3" />
                    Reports & Analytics
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'settings'
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    System Settings
                  </button>
                </div>
              </nav>
            </div>
            
            <div className="mt-6 bg-blue-600 rounded-lg shadow p-4 text-white">
              <h3 className="font-medium mb-2">Leapfrog Implementation Tip</h3>
              <p className="text-sm text-blue-100 mb-3">
                Regular data reviews are critical for successful Leapfrog implementations. Schedule weekly analysis sessions with your team.
              </p>
              <a href="#" className="text-sm font-medium text-white hover:text-blue-100 inline-flex items-center">
                View implementation guide
                <ChevronDown className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:ml-8 flex-1">
            {activeTab === 'overview' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                        <Users className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
                        <div className="text-3xl font-bold">{mockUsers.length}</div>
                        <div className="text-sm text-green-600">
                          <span>↑ 12% from last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-green-100 text-green-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Active Plans</h3>
                        <div className="text-3xl font-bold">{mockTreatmentPlans.length}</div>
                        <div className="text-sm text-green-600">
                          <span>↑ 8% from last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                        <Activity className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Avg. Effectiveness</h3>
                        <div className="text-3xl font-bold">72%</div>
                        <div className="text-sm text-green-600">
                          <span>↑ 5% from last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Recent Activity</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <Users className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">New user registered</div>
                          <div className="text-xs text-gray-500">Dr. Emily Rodriguez</div>
                          <div className="text-xs text-gray-500">2 hours ago</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">New treatment plan created</div>
                          <div className="text-xs text-gray-500">Dr. Michael Chen created a plan for John Doe</div>
                          <div className="text-xs text-gray-500">5 hours ago</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <RefreshCw className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Treatment plan updated</div>
                          <div className="text-xs text-gray-500">Diabetes Control Program was modified</div>
                          <div className="text-xs text-gray-500">Yesterday at 3:45 PM</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <Activity className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Patient feedback submitted</div>
                          <div className="text-xs text-gray-500">Jane Smith provided weekly treatment feedback</div>
                          <div className="text-xs text-gray-500">Yesterday at 9:12 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Implementation Timeline</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-800">View details</button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                          <Check className="h-5 w-5" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Phase 1: Initial Setup</div>
                          <div className="text-xs text-gray-500">System configuration and user onboarding</div>
                          <div className="text-xs text-green-600">Completed on May 15, 2023</div>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                          <Check className="h-5 w-5" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Phase 2: Treatment Template Creation</div>
                          <div className="text-xs text-gray-500">Development of core treatment components</div>
                          <div className="text-xs text-green-600">Completed on June 2, 2023</div>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Phase 3: Limited Deployment</div>
                          <div className="text-xs text-gray-500">Initial personalized plans for test group</div>
                          <div className="text-xs text-blue-600">In progress (75% complete)</div>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Phase 4: Full Deployment</div>
                          <div className="text-xs text-gray-500">System-wide implementation and training</div>
                          <div className="text-xs text-gray-500">Planned for August 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b">
                    <h3 className="text-lg font-medium">Recent Treatment Plans</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Plan Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Patient
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Provider
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Start Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {mockTreatmentPlans.map(plan => (
                          <tr key={plan.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {plan.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {plan.patientId === '1' ? 'John Doe' : 'Jane Smith'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {plan.doctorId === '1' ? 'Dr. Michael Chen' : 'Dr. Sarah Johnson'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {plan.startDate.toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {plan.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                              <button className="text-blue-600 hover:text-blue-900">Edit</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'users' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">User Management</h1>
                <UserManagement />
              </div>
            )}
            
            {activeTab === 'treatments' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Treatment Plans</h1>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search plans..."
                      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                    />
                    <select className="ml-4 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Plans</option>
                      <option>Active Plans</option>
                      <option>Completed Plans</option>
                      <option>Discontinued Plans</option>
                    </select>
                  </div>
                  <Link to="/treatment-generator" className="btn-primary">
                    Create New Plan
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Plan Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Provider
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Start Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Effectiveness
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockTreatmentPlans.map(plan => (
                        <tr key={plan.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {plan.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {plan.patientId === '1' ? 'John Doe' : 'Jane Smith'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {plan.doctorId === '1' ? 'Dr. Michael Chen' : 'Dr. Sarah Johnson'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {plan.startDate.toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {plan.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-blue-600 h-2.5 rounded-full" 
                                  style={{ width: plan.id === '1' ? '75%' : '65%' }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-500">
                                {plan.id === '1' ? '75%' : '65%'}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'reports' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Reports & Analytics</h1>
                
                <div className="flex items-center mb-6">
                  <button className="btn-primary mr-2">Generate Report</button>
                  <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Custom range</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium mb-4">Treatment Effectiveness</h3>
                    <div className="h-64 flex items-end space-x-4">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-full bg-blue-100 rounded-sm" style={{ height: '75%' }}>
                          <div className="bg-blue-500 h-full w-full rounded-sm"></div>
                        </div>
                        <div className="text-xs mt-2 text-gray-500">Hypertension</div>
                      </div>
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-full bg-blue-100 rounded-sm" style={{ height: '65%' }}>
                          <div className="bg-blue-500 h-full w-full rounded-sm"></div>
                        </div>
                        <div className="text-xs mt-2 text-gray-500">Diabetes</div>
                      </div>
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-full bg-blue-100 rounded-sm" style={{ height: '70%' }}>
                          <div className="bg-blue-500 h-full w-full rounded-sm"></div>
                        </div>
                        <div className="text-xs mt-2 text-gray-500">Arthritis</div>
                      </div>
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-full bg-blue-100 rounded-sm" style={{ height: '60%' }}>
                          <div className="bg-blue-500 h-full w-full rounded-sm"></div>
                        </div>
                        <div className="text-xs mt-2 text-gray-500">Asthma</div>
                      </div>
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-full bg-blue-100 rounded-sm" style={{ height: '80%' }}>
                          <div className="bg-blue-500 h-full w-full rounded-sm"></div>
                        </div>
                        <div className="text-xs mt-2 text-gray-500">Depression</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium mb-4">Patient Feedback Analysis</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium">Pain Management</div>
                          <div className="text-sm font-medium">85%</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium">Symptom Reduction</div>
                          <div className="text-sm font-medium">72%</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium">Quality of Life</div>
                          <div className="text-sm font-medium">68%</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium">Treatment Adherence</div>
                          <div className="text-sm font-medium">90%</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium">Side Effect Severity</div>
                          <div className="text-sm font-medium">25%</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium mb-4">Implementation Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Avg. Time to Implementation</div>
                      <div className="text-2xl font-bold">9.2 days</div>
                      <div className="text-xs text-green-600">↓ 2.1 days from baseline</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Plan Adaptation Rate</div>
                      <div className="text-2xl font-bold">45%</div>
                      <div className="text-xs text-yellow-600">↑ 5% from baseline</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Provider Satisfaction</div>
                      <div className="text-2xl font-bold">4.2/5</div>
                      <div className="text-xs text-green-600">↑ 0.5 from baseline</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Patient Satisfaction</div>
                      <div className="text-2xl font-bold">4.5/5</div>
                      <div className="text-xs text-green-600">↑ 0.7 from baseline</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">System Settings</h1>
                
                <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                  <div className="px-6 py-4 border-b">
                    <h3 className="text-lg font-medium">General Settings</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        System Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Leapfrog Treatment Design"
                        className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Default Language
                      </label>
                      <select
                        className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date Format
                      </label>
                      <select
                        className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="enable-notifications"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label htmlFor="enable-notifications" className="ml-2 block text-sm text-gray-700">
                        Enable email notifications
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="enable-patient-portal"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label htmlFor="enable-patient-portal" className="ml-2 block text-sm text-gray-700">
                        Enable patient portal
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                  <div className="px-6 py-4 border-b">
                    <h3 className="text-lg font-medium">Security Settings</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Session Timeout (minutes)
                      </label>
                      <input
                        type="number"
                        defaultValue="30"
                        className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password Policy
                      </label>
                      <select
                        className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Standard (8+ chars, 1 uppercase, 1 number)</option>
                        <option>Strong (10+ chars, uppercase, number, symbol)</option>
                        <option>Very Strong (12+ chars, uppercase, number, symbol)</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="enable-2fa"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label htmlFor="enable-2fa" className="ml-2 block text-sm text-gray-700">
                        Enable two-factor authentication
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="data-encryption"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label htmlFor="data-encryption" className="ml-2 block text-sm text-gray-700">
                        Enable data encryption at rest
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b">
                    <h3 className="text-lg font-medium">Data Management</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Backup Frequency
                      </label>
                      <select
                        className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Data Retention Period
                      </label>
                      <select
                        className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>1 year</option>
                        <option>3 years</option>
                        <option>7 years</option>
                        <option>Indefinite</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="enable-audit-logs"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label htmlFor="enable-audit-logs" className="ml-2 block text-sm text-gray-700">
                        Enable detailed audit logs
                      </label>
                    </div>
                    
                    <div className="pt-4">
                      <button className="btn-primary">Save Settings</button>
                      <button className="btn-secondary ml-4">Reset to Defaults</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
 