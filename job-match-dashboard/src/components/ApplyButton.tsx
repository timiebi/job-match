import React from "react";
import { Job } from "../types/job";

const userSkills = ["React", "TypeScript", "Tailwind CSS"];

const ApplyButton: React.FC<{ job: Job }> = ({ job }) => {
    const missingSkills = job.requiredSkills.filter((skill) => !userSkills.includes(skill));

    const handleApply = () => {
        if (missingSkills.length > 0) {
            alert(`You are missing: ${missingSkills.join(", ")}. Consider upskilling.`);
        } else {
            alert("Application submitted successfully!");
        }
    };

    return (
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleApply}>
            Apply Now
        </button>
    );
};

export default ApplyButton;
