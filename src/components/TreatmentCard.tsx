import { ReactNode } from 'react';

type TreatmentStatus = 'active' | 'completed' | 'upcoming';

interface TreatmentCardProps {
  title: string;
  description: string;
  duration: string;
  frequency: string;
  status: TreatmentStatus;
  onStart?: () => void;
  icon?: ReactNode;
}

export const TreatmentCard = ({
  title,
  description,
  duration,
  frequency,
  status,
  onStart,
  icon,
}: TreatmentCardProps) => {
  const statusColors = {
    active: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    upcoming: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          {frequency}
        </div>
      </div>
      
      {onStart && (
        <button
          onClick={onStart}
          disabled={status !== 'active'}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            status === 'active'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          {status === 'completed' ? 'Completed' : 'Start Treatment'}
        </button>
      )}
    </div>
  );
};

export default TreatmentCard;
