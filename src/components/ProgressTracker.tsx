import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ProgressStep {
  id: string;
  name: string;
  description: string;
  status: 'complete' | 'current' | 'upcoming';
  date?: string;
}

interface ProgressTrackerProps {
  steps: ProgressStep[];
  className?: string;
}

export const ProgressTracker = ({ steps, className = '' }: ProgressTrackerProps) => {
  return (
    <div className={`flow-root ${className}`}>
      <ul role="list" className="-mb-8">
        {steps.map((step, stepIdx) => (
          <li key={step.id}>
            <div className="relative pb-8">
              {stepIdx !== steps.length - 1 ? (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                      step.status === 'complete'
                        ? 'bg-green-500 text-white'
                        : step.status === 'current'
                        ? 'bg-white border-2 border-blue-500 text-blue-500'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.status === 'complete' ? (
                      <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                    ) : step.status === 'current' ? (
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    ) : (
                      <ClockIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        step.status === 'complete' ? 'text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      {step.name}
                    </p>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                  {step.date && (
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      {step.date}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
