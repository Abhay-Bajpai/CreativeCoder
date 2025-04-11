import { Award, Shield, Trophy } from "lucide-react";

interface CertificationCardProps {
  title: string;
  description: string;
  type: "certification" | "achievement";
}

const CertificationCard = ({ title, description, type }: CertificationCardProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-primary">
      <div className="flex items-start mb-3">
        <div className="bg-primary/20 p-2 rounded-full mr-4">
          {type === "certification" ? (
            <Award className="h-5 w-5 text-primary" />
          ) : type === "achievement" ? (
            <Trophy className="h-5 w-5 text-primary" />
          ) : (
            <Shield className="h-5 w-5 text-primary" />
          )}
        </div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <div className="ml-11">
        <span
          className={`inline-block ${
            type === "achievement"
              ? "bg-primary/20 text-primary/90"
              : "bg-green-900 text-green-300"
          } text-xs px-3 py-1 rounded-full`}
        >
          {type === "achievement" ? "Achievement" : "Completed"}
        </span>
      </div>
    </div>
  );
};

export default CertificationCard;
