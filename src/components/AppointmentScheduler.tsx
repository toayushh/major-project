import { useState } from 'react';
import { CalendarIcon, ClockIcon, UserGroupIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface AppointmentType {
  id: string;
  name: string;
  duration: string;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  avatar?: string;
}

const timeSlots: TimeSlot[] = [
  { id: '1', time: '09:00 AM', available: true },
  { id: '2', time: '10:00 AM', available: true },
  { id: '3', time: '11:00 AM', available: false },
  { id: '4', time: '01:00 PM', available: true },
  { id: '5', time: '02:00 PM', available: true },
  { id: '6', time: '03:00 PM', available: true },
];

const appointmentTypes: AppointmentType[] = [
  { id: '1', name: 'General Consultation', duration: '30 mins' },
  { id: '2', name: 'Follow-up Visit', duration: '15 mins' },
  { id: '3', name: 'Specialist Consultation', duration: '60 mins' },
];

const doctors: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiology' },
  { id: '2', name: 'Dr. Michael Chen', specialty: 'Neurology' },
  { id: '3', name: 'Dr. Emily Wilson', specialty: 'Dermatology' },
];

export const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedType, setSelectedType] = useState<AppointmentType | null>(null);
  const [step, setStep] = useState<number>(1);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setSelectedDoctor(null);
    setStep(2);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setStep(4);
  };

  const handleAppointmentTypeSelect = (type: AppointmentType) => {
    setSelectedType(type);
    setStep(5);
  };

  const handleConfirm = () => {
    // Handle appointment confirmation
    console.log('Appointment confirmed!', {
      date: selectedDate,
      time: selectedTime,
      doctor: selectedDoctor,
      type: selectedType,
    });
    // Reset form or show success message
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Select a Date</h3>
            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <button
                  key={day}
                  onClick={() => handleDateSelect(new Date(Date.now() + day * 24 * 60 * 60 * 1000))}
                  className="p-2 rounded-md hover:bg-blue-50 border border-transparent hover:border-blue-200"
                >
                  <div className="text-sm text-gray-500">
                    {new Date(Date.now() + day * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className="text-lg font-medium">
                    {new Date(Date.now() + day * 24 * 60 * 60 * 1000).getDate()}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Select a Time</h3>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`p-3 rounded-md text-center ${
                    selectedTime === slot.time
                      ? 'bg-blue-600 text-white'
                      : slot.available
                      ? 'bg-white hover:bg-gray-50 border border-gray-200'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Select Appointment Type</h3>
            <div className="space-y-3">
              {appointmentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleAppointmentTypeSelect(type)}
                  className={`w-full p-4 text-left rounded-lg border ${
                    selectedType?.id === type.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="font-medium">{type.name}</div>
                  <div className="text-sm text-gray-500">{type.duration}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Select a Doctor</h3>
            <div className="space-y-3">
              {doctors.map((doctor) => (
                <button
                  key={doctor.id}
                  onClick={() => handleDoctorSelect(doctor)}
                  className={`w-full p-4 text-left rounded-lg border ${
                    selectedDoctor?.id === doctor.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <UserGroupIcon className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium">{doctor.name}</div>
                      <div className="text-sm text-gray-500">{doctor.specialty}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Confirm Appointment</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p>{selectedDate?.toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p>{selectedTime}</p>
                  </div>
                </div>
                {selectedDoctor && (
                  <div className="flex items-center">
                    <UserGroupIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Doctor</p>
                      <p>{selectedDoctor.name}</p>
                      <p className="text-sm text-gray-500">{selectedDoctor.specialty}</p>
                    </div>
                  </div>
                )}
                {selectedType && (
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Appointment Type</p>
                      <p>{selectedType.name}</p>
                      <p className="text-sm text-gray-500">{selectedType.duration}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleConfirm}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Confirm Appointment
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h2>
        <p className="text-gray-600">Schedule your visit with our healthcare providers</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`flex flex-col items-center ${
                s < step ? 'text-blue-600' : s === step ? 'text-blue-600 font-medium' : 'text-gray-400'
              }`}
            >
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  s < step ? 'bg-blue-100' : s === step ? 'bg-blue-600 text-white' : 'bg-gray-100'
                }`}
              >
                {s < step ? '✓' : s}
              </div>
              <span className="text-xs mt-1">
                {s === 1
                  ? 'Date'
                  : s === 2
                  ? 'Time'
                  : s === 3
                  ? 'Type'
                  : s === 4
                  ? 'Doctor'
                  : 'Confirm'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">{renderStep()}</div>

      {step > 1 && (
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setStep(step - 1)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Back
          </button>
          {step < 5 && (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              disabled={
                (step === 2 && !selectedTime) ||
                (step === 3 && !selectedType) ||
                (step === 4 && !selectedDoctor)
              }
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
