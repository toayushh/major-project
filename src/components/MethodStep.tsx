interface  MethodStepProps {
  number: number;
  title: string;
  description: string;
}

const MethodStep = ({ number, title, description }: MethodStepProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MethodStep;
 