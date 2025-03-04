import React from "react";
import { Job } from "../types/job";
import MatchScore from "./MatchScore";

interface JobCardProps {
    job: Job;
    onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => (
    <div
        className="border rounded-lg p-8 pb-9 shadow-md cursor-pointer hover:shadow-lg transition"
        onClick={onClick}
    >
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-gray-600">{job.company} - {job.location}</p>
        <p className="text-green-500 font-medium">{job.salary}</p>
        <MatchScore score={job.matchScore} />
    </div>
);

export default JobCard;
