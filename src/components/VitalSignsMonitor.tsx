import { HeartIcon, ScaleIcon, ThermometerIcon, LightningBoltIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

interface VitalSign {
  id: string;
  name: string;
  value: number | string;
  unit: string;
  normalRange: string;
  trend?: 'up' | 'down' | 'stable';
  timestamp: string;
}

interface VitalSignsMonitorProps {
  vitals: VitalSign[];
  onRefresh?: () => void;
  showAll?: boolean;
}

const getVitalIcon = (vitalName: string) => {
  switch (vitalName.toLowerCase()) {
    case 'heart rate':
      return <HeartIcon className="h-6 w-6 text-red-500" />;
    case 'blood pressure':
      return <ScaleIcon className="h-6 w-6 text-blue-500" />;
    case 'temperature':
      return <ThermometerIcon className="h-6 w-6 text-orange-500" />;
    case 'oxygen':
      return <LightningBoltIcon className="h-6 w-6 text-green-500" />;
    default:
      return <div className="h-6 w-6 rounded-full bg-gray-200" />;
  }
};

const getTrendIcon = (trend: 'up' | 'down' | 'stable' | undefined) => {
  switch (trend) {
    case 'up':
      return <ArrowTrendingUpIcon className="h-5 w-5 text-red-500" />;
    case 'down':
      return <ArrowTrendingDownIcon className="h-5 w-5 text-green-500" />;
    default:
      return <div className="h-5 w-5" />;
  }
};

const isInNormalRange = (value: string | number, normalRange: string) => {
  if (typeof value === 'string') {
    // Handle blood pressure format like "120/80"
    if (value.includes('/')) {
      const [systolic, diastolic] = value.split('/').map(Number);
      const [systolicRange, diastolicRange] = normalRange.split('/');
      const [systolicMin, systolicMax] = systolicRange.split('-').map(Number);
      const [diastolicMin, diastolicMax] = diastolicRange.split('-').map(Number);
      
      return systolic >= systolicMin && 
             systolic <= systolicMax && 
             diastolic >= diastolicMin && 
             diastolic <= diastolicMax;
    }
    return true; // Default to true for other string values we can't evaluate
  }
  
  // Handle numeric values
  const [min, max] = normalRange.split('-').map(Number);
  return value >= min && value <= max;
};

export const VitalSignsMonitor = ({ vitals, onRefresh, showAll = false }: VitalSignsMonitorProps) => {
  const displayedVitals = showAll ? vitals : vitals.slice(0, 4);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Vital Signs</h2>
          {onRefresh && (
            <button
              onClick={onRefresh}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Refresh
            </button>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">Last updated: {new Date().toLocaleTimeString()}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {displayedVitals.map((vital) => {
          const isNormal = isInNormalRange(vital.value, vital.normalRange);
          
          return (
            <div
              key={vital.id}
              className={`p-4 rounded-lg border ${
                isNormal ? 'border-gray-200' : 'border-red-200 bg-red-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-opacity-10 bg-current">
                    {getVitalIcon(vital.name)}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{vital.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-2xl font-bold">
                        {vital.value}
                        <span className="text-sm font-normal text-gray-500 ml-1">
                          {vital.unit}
                        </span>
                      </span>
                      {vital.trend && (
                        <span className="ml-2">
                          {getTrendIcon(vital.trend)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {!isNormal && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Alert
                  </span>
                )}
              </div>
              <div className="mt-3 text-xs text-gray-500">
                <p>Normal: {vital.normalRange} {vital.unit}</p>
                <p className="text-gray-400">Updated: {vital.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && vitals.length > 4 && (
        <div className="bg-gray-50 px-4 py-3 text-center border-t border-gray-200">
          <button
            type="button"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
            onClick={() => {}}
          >
            View all vitals ({vitals.length - 4} more)
          </button>
        </div>
      )}
    </div>
  );
};

export default VitalSignsMonitor;
