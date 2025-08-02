import  { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { mockTreatmentPlans, mockFeedbacks } from '../data/mockData';
import { FileText, Download, Filter, Activity } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartType = 'pain' | 'adherence' | 'effectiveness';
type TimeFrame = '7days' | '30days' | '90days' | 'all';

const AnalyticsPage = () => {
  const [chartType, setChartType] = useState<ChartType>('pain');
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('all');
  
  // Mock data for charts
  const painChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Hypertension Plan',
        data: [3, 2, 2, 1],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 0.8)',
      },
      {
        label: 'Diabetes Plan',
        data: [4, 3, 3, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 0.8)',
      },
    ],
  };
  
  const adherenceChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Medication Adherence',
        data: [85, 90, 88, 92],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
      },
      {
        label: 'Lifestyle Changes Adherence',
        data: [70, 75, 80, 85],
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgba(255, 159, 64, 0.8)',
      },
    ],
  };
  
  const effectivenessChartData = {
    labels: ['Initial', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Hypertension Plan Effectiveness',
        data: [40, 55, 65, 70, 75],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 0.8)',
        tension: 0.4,
      },
      {
        label: 'Diabetes Plan Effectiveness',
        data: [30, 45, 50, 60, 65],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 0.8)',
        tension: 0.4,
      },
    ],
  };
  
  const renderChart = () => {
    switch (chartType) {
      case 'pain':
        return <Bar data={painChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Pain Level Trends (Scale 0-10)' } } }} />;
      case 'adherence':
        return <Bar data={adherenceChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Treatment Adherence (%)' } } }} />;
      case 'effectiveness':
        return <Line data={effectivenessChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Treatment Effectiveness Score (%)' } } }} />;
      default:
        return <div>Select a chart type</div>;
    }
  };
  
  return (
    <div>
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Analytics Dashboard</h1>
          <p className="text-xl max-w-3xl">
            Monitor treatment effectiveness, patient feedback, and overall program metrics to optimize personalized treatment approaches.
          </p>
        </div>
      </section>
      
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setChartType('pain')} 
                className={`px-4 py-2 rounded-md font-medium text-sm ${chartType === 'pain' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Pain Levels
              </button>
              <button 
                onClick={() => setChartType('adherence')} 
                className={`px-4 py-2 rounded-md font-medium text-sm ${chartType === 'adherence' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Treatment Adherence
              </button>
              <button 
                onClick={() => setChartType('effectiveness')} 
                className={`px-4 py-2 rounded-md font-medium text-sm ${chartType === 'effectiveness' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Effectiveness Score
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Time frame:</span>
              <select 
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value as TimeFrame)}
                className="border rounded-md px-2 py-1 text-sm"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="all">All time</option>
              </select>
              
              <button className="ml-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow">
            {renderChart()}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Treatment Plans Overview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="text-blue-800 mb-2 font-medium">Active Treatment Plans</div>
              <div className="text-3xl font-bold">{mockTreatmentPlans.filter(p => p.status === 'active').length}</div>
              <div className="text-blue-600 text-sm mt-1">2 leapfrog tests in progress</div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="text-green-800 mb-2 font-medium">Avg. Effectiveness Score</div>
              <div className="text-3xl font-bold">72%</div>
              <div className="text-green-600 text-sm mt-1">↑ 8% from baseline</div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <div className="text-purple-800 mb-2 font-medium">Patient Feedback Collected</div>
              <div className="text-3xl font-bold">{mockFeedbacks.length}</div>
              <div className="text-purple-600 text-sm mt-1">100% response rate</div>
            </div>
          </div>
          
          <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Treatment Plan
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patients
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
                {mockTreatmentPlans.map((plan) => (
                  <tr key={plan.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{plan.name}</div>
                      <div className="text-xs text-gray-500">{plan.treatments.length} treatments</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">1 patient</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{plan.startDate.toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {plan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: plan.id === '1' ? '75%' : '65%' }}></div>
                        </div>
                        <span className="ml-2 text-sm">{plan.id === '1' ? '75%' : '65%'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Activity className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Treatment Effectiveness Insights</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Top Performing Treatments</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Walking Exercise</div>
                    <div className="text-sm text-gray-500">Lifestyle modification</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Lisinopril</div>
                    <div className="text-sm text-gray-500">Medication</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Dietary Counseling</div>
                    <div className="text-sm text-gray-500">Therapy</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <span className="text-sm font-medium">72%</span>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Metformin</div>
                    <div className="text-sm text-gray-500">Medication</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recent Feedback Analysis</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Common Reported Side Effects</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-xs rounded-full">Dry cough</span>
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-xs rounded-full">Mild nausea</span>
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-xs rounded-full">Fatigue</span>
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-xs rounded-full">Dizziness</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500 mb-1">Improvement Trends</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full">Reduced headaches</span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full">More stable blood pressure</span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full">Improved energy levels</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <div className="text-sm font-medium mb-2">Suggested Adjustments</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-2 flex-shrink-0">
                        <Filter className="h-3 w-3" />
                      </span>
                      <span>Consider adjusting Lisinopril dosage to reduce dry cough side effect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-2 flex-shrink-0">
                        <Filter className="h-3 w-3" />
                      </span>
                      <span>Metformin timing adjustment may reduce nausea (take with food)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 flex-shrink-0">
                        <Filter className="h-3 w-3" />
                      </span>
                      <span>Walking exercise frequency can be increased based on positive outcomes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
 