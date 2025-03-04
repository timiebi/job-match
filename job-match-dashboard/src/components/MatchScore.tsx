import React from "react";

interface MatchScoreProps {
    score: number;
}

const getColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
};

const MatchScore: React.FC<MatchScoreProps> = ({ score }) => (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div className={`h-4 rounded-full ${getColor(score)}`} style={{ width: `${score}%` }} />
        <p className="text-sm mt-1">{score}% Match</p>
    </div>
);

export default MatchScore;
