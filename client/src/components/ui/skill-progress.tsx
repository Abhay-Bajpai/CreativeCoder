import { motion } from "framer-motion";

interface SkillProgressProps {
  name: string;
  percentage: number;
}

const SkillProgress = ({ name, percentage }: SkillProgressProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillProgress;
