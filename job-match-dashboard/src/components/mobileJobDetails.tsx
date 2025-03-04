import React from "react";
import {Job} from "../types/job";
import ApplyButton from "./ApplyButton";
import {X} from "lucide-react";

interface MobileJobDetailsProps {
    job: Job;
    onClose: () => void;
}

const MobileJobDetails: React.FC<MobileJobDetailsProps> = ({job, onClose}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
            <div className="bg-white w-full max-w-[90%] p-6 rounded-lg shadow-lg relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                    <X className="w-6 h-6"/>
                </button>

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
                    <ApplyButton job={job}/>
                </div>
            </div>
        </div>
    );
};

export default MobileJobDetails;
