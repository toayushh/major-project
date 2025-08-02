import  { User, Patient, Doctor, TreatmentPlan, Treatment, Feedback } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'patient',
    profileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzQ0Njk4OTM4fDA&ixlib=rb-4.0.3'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'patient',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxwYXRpZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzQ0Njk4OTM4fDA&ixlib=rb-4.0.3'
  },
  {
    id: '3',
    name: 'Dr. Michael Chen',
    email: 'dr.chen@example.com',
    role: 'doctor',
    profileImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NDQ2OTg5Njl8MA&ixlib=rb-4.0.3'
  },
  {
    id: '4',
    name: 'Dr. Sarah Johnson',
    email: 'dr.johnson@example.com',
    role: 'doctor',
    profileImage: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NDQ2OTg5Njl8MA&ixlib=rb-4.0.3'
  },
  {
    id: '5',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    profileImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NDQ2OTg5OTh8MA&ixlib=rb-4.0.3'
  }
];

export const mockPatients: Patient[] = [
  {
    id: '1',
    userId: '1',
    medicalHistory: [
      'Hypertension diagnosed in 2018',
      'Appendectomy in 2015',
      'Seasonal allergies'
    ],
    currentMedications: [
      'Lisinopril 10mg daily',
      'Cetirizine 10mg as needed'
    ],
    allergies: [
      'Penicillin',
      'Pollen'
    ],
    symptoms: [
      'Occasional headaches',
      'Fatigue after physical exertion'
    ],
    treatmentPlans: []
  },
  {
    id: '2',
    userId: '2',
    medicalHistory: [
      'Type 2 diabetes diagnosed in 2019',
      'Fractured wrist in 2017'
    ],
    currentMedications: [
      'Metformin 500mg twice daily',
      'Vitamin D supplement daily'
    ],
    allergies: [
      'Sulfa drugs',
      'Shellfish'
    ],
    symptoms: [
      'Occasional dizziness',
      'Joint pain in knees'
    ],
    treatmentPlans: []
  }
];

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    userId: '3',
    specialty: 'Cardiology',
    patients: ['1']
  },
  {
    id: '2',
    userId: '4',
    specialty: 'Endocrinology',
    patients: ['2']
  }
];

export const mockTreatments: Treatment[] = [
  {
    id: '1',
    name: 'Lisinopril',
    description: 'ACE inhibitor for blood pressure management',
    dosage: '10mg',
    frequency: 'Once daily',
    duration: '90 days',
    type: 'medication'
  },
  {
    id: '2',
    name: 'Walking Exercise',
    description: 'Moderate intensity walking for cardiovascular health',
    frequency: '30 minutes, 5 days a week',
    duration: 'Ongoing',
    type: 'lifestyle'
  },
  {
    id: '3',
    name: 'Metformin',
    description: 'Oral medication to control blood sugar levels',
    dosage: '500mg',
    frequency: 'Twice daily with meals',
    duration: '90 days',
    type: 'medication'
  },
  {
    id: '4',
    name: 'Dietary Counseling',
    description: 'Nutritional guidance for managing diabetes',
    frequency: 'Initial session plus monthly follow-ups',
    duration: '6 months',
    type: 'therapy'
  }
];

export const mockTreatmentPlans: TreatmentPlan[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    name: 'Hypertension Management Plan',
    description: 'Comprehensive approach to manage blood pressure through medication and lifestyle changes',
    startDate: new Date('2023-01-15'),
    status: 'active',
    treatments: [mockTreatments[0], mockTreatments[1]],
    feedbacks: []
  },
  {
    id: '2',
    patientId: '2',
    doctorId: '2',
    name: 'Diabetes Control Program',
    description: 'Integrated approach to manage blood glucose through medication, diet, and exercise',
    startDate: new Date('2023-02-01'),
    status: 'active',
    treatments: [mockTreatments[2], mockTreatments[3]],
    feedbacks: []
  }
];

// Add treatment plans to patients
mockPatients[0].treatmentPlans = [mockTreatmentPlans[0]];
mockPatients[1].treatmentPlans = [mockTreatmentPlans[1]];

export const mockFeedbacks: Feedback[] = [
  {
    id: '1',
    patientId: '1',
    treatmentPlanId: '1',
    date: new Date('2023-01-22'),
    painLevel: 2,
    symptoms: ['Mild headache', 'Slight dizziness when standing'],
    sideEffects: ['Dry cough'],
    notes: 'Symptoms improved compared to last week'
  },
  {
    id: '2',
    patientId: '1',
    treatmentPlanId: '1',
    date: new Date('2023-01-29'),
    painLevel: 1,
    symptoms: ['Occasional mild headache'],
    sideEffects: ['Dry cough continues'],
    notes: 'Blood pressure readings more stable'
  },
  {
    id: '3',
    patientId: '2',
    treatmentPlanId: '2',
    date: new Date('2023-02-08'),
    painLevel: 3,
    symptoms: ['Fatigue', 'Increased thirst'],
    sideEffects: ['Mild nausea after taking medication'],
    notes: 'Blood sugar readings still fluctuating'
  },
  {
    id: '4',
    patientId: '2',
    treatmentPlanId: '2',
    date: new Date('2023-02-15'),
    painLevel: 2,
    symptoms: ['Less fatigue', 'Some thirst'],
    sideEffects: ['Nausea decreased'],
    notes: 'Blood sugar more stable in mornings'
  }
];

// Add feedbacks to treatment plans
mockTreatmentPlans[0].feedbacks = [mockFeedbacks[0], mockFeedbacks[1]];
mockTreatmentPlans[1].feedbacks = [mockFeedbacks[2], mockFeedbacks[3]];
 