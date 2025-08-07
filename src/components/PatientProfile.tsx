import { UserCircleIcon, CalendarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface PatientProfileProps {
  name: string;
  age: number;
  gender: string;
  bloodType?: string;
  lastVisit?: string;
  phone: string;
  email: string;
  address: string;
  avatarUrl?: string;
  onEdit?: () => void;
}

export const PatientProfile = ({
  name,
  age,
  gender,
  bloodType,
  lastVisit,
  phone,
  email,
  address,
  avatarUrl,
  onEdit,
}: PatientProfileProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-4">
          {avatarUrl ? (
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={avatarUrl}
              alt={name}
            />
          ) : (
            <UserCircleIcon className="h-16 w-16 text-gray-400" />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-600">{age} years • {gender} {bloodType && `• ${bloodType}`}</p>
          </div>
        </div>
        {onEdit && (
          <button
            onClick={onEdit}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <CalendarIcon className="h-5 w-5 mr-2 text-gray-400" />
          <span>Last Visit: {lastVisit || 'N/A'}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
          <a href={`tel:${phone}`} className="hover:text-blue-600">
            {phone}
          </a>
        </div>
        
        <div className="flex items-center text-gray-600">
          <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-400" />
          <a href={`mailto:${email}`} className="hover:text-blue-600">
            {email}
          </a>
        </div>
        
        <div className="flex items-start text-gray-600">
          <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
          <span>{address}</span>
        </div>
      </div>

      {lastVisit && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Next Appointment</h3>
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-blue-800 font-medium">Follow-up Consultation</p>
            <p className="text-sm text-blue-700">In 2 weeks</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientProfile;
