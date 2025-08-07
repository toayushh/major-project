import { CalendarIcon, CheckCircleIcon, ClockIcon, DocumentTextIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface TreatmentTask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'completed' | 'in-progress' | 'pending' | 'overdue';
  type: 'medication' | 'therapy' | 'test' | 'appointment' | 'other';
  priority?: 'low' | 'medium' | 'high';
  completedDate?: string;
  assignedTo?: string;
}

interface TreatmentPlanProps {
  tasks: TreatmentTask[];
  onTaskComplete?: (taskId: string) => void;
  onTaskSelect?: (taskId: string) => void;
  showCompleted?: boolean;
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <CheckCircleIcon className="-ml-0.5 mr-1.5 h-3.5 w-3.5 text-green-500" />
          Completed
        </span>
      );
    case 'in-progress':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <ClockIcon className="-ml-0.5 mr-1.5 h-3.5 w-3.5 text-blue-500" />
          In Progress
        </span>
      );
    case 'overdue':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <ExclamationCircleIcon className="-ml-0.5 mr-1.5 h-3.5 w-3.5 text-red-500" />
          Overdue
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          <ClockIcon className="-ml-0.5 mr-1.5 h-3.5 w-3.5 text-yellow-500" />
          Pending
        </span>
      );
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'medication':
      return (
        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      );
    case 'therapy':
      return (
        <div className="p-2 rounded-lg bg-green-50 text-green-600">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
      );
    case 'test':
      return (
        <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      );
    case 'appointment':
      return (
        <div className="p-2 rounded-lg bg-yellow-50 text-yellow-600">
          <CalendarIcon className="h-5 w-5" />
        </div>
      );
    default:
      return (
        <div className="p-2 rounded-lg bg-gray-50 text-gray-600">
          <DocumentTextIcon className="h-5 w-5" />
        </div>
      );
  }
};

export const TreatmentPlan = ({
  tasks,
  onTaskComplete,
  onTaskSelect,
  showCompleted = false,
}: TreatmentPlanProps) => {
  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => task.status !== 'completed');

  const handleTaskClick = (taskId: string) => {
    if (onTaskSelect) {
      onTaskSelect(taskId);
    }
  };

  const handleCompleteClick = (e: React.MouseEvent, taskId: string) => {
    e.stopPropagation();
    if (onTaskComplete) {
      onTaskComplete(taskId);
    }
  };

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No tasks</h3>
        <p className="mt-1 text-sm text-gray-500">
          {showCompleted ? 'No completed tasks yet.' : 'All caught up! No pending tasks.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <div
              onClick={() => handleTaskClick(task.id)}
              className="block hover:bg-gray-50 cursor-pointer"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getTypeIcon(task.type)}
                    <p className="ml-4 text-sm font-medium text-blue-600 truncate">
                      {task.title}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    {getStatusBadge(task.status)}
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      Due {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                    {task.assignedTo && (
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <svg
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {task.assignedTo}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    {task.status !== 'completed' && onTaskComplete && (
                      <button
                        onClick={(e) => handleCompleteClick(e, task.id)}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 mr-2"
                      >
                        Mark Complete
                      </button>
                    )}
                    {task.completedDate && (
                      <p className="text-sm text-gray-500">
                        Completed on {new Date(task.completedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                {task.description && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {task.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentPlan;
