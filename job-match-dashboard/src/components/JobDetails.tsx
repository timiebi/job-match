import React from "react";
import { Job } from "../types/job";
import ApplyButton from "./ApplyButton";

interface JobDetailsProps {
    job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
    return (
        <div className="w-full h-[calc(100vh-80px)] overflow-y-auto bg-white shadow-md p-6">
            {/* Job Info */}
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-green-500 font-medium">{job.salary}</p>

            {/* Required Skills */}
            <h3 className="mt-4 font-semibold">Required Skills:</h3>
            <ul className="list-disc pl-5 text-gray-700">
                {job.requiredSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>

            {/* Apply Button */}
            <div className="mt-6">
                <ApplyButton job={job} />
            </div>
        </div>
    );
};

export default JobDetails;
