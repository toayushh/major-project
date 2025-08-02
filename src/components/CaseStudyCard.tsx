interface  CaseStudyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  outcomes: string[];
}

const CaseStudyCard = ({ title, description, imageUrl, outcomes }: CaseStudyCardProps) => {
  return (
    <div className="card overflow-hidden">
      <div className="h-48 mb-4 -mx-6 -mt-6 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div>
        <h4 className="font-semibold mb-2">Key Outcomes:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyCard;
 