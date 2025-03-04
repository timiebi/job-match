import { useEffect, useState } from "react";
import JobDetails from "../components/JobDetails";
import { Job } from "../types/job";
import { useJobStore } from "../store/jobstore.ts";
import { Header } from "../components/header.tsx";
import JobCard from "../components/jobCard.tsx";
import MobileJobDetails from "../components/mobileJobDetails.tsx";

export default function Home() {
    const { jobs, fetchJobs } = useJobStore();
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        if (jobs.length > 0 && !selectedJob) {
            setSelectedJob(jobs[0]); // Default to first job
        }
    }, [jobs]);

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
        setIsModalOpen(true); // Open modal for mobile
    };

    return (
        <div className="bg-gray-50 min-h-screen md:mt-[15rem]">
            <Header />
            <div className="w-full md:max-w-[1500px] mx-auto p-6 md:grid grid-cols-[60%_40%] gap-8">
                {/* Job List */}
                <div className="w-full">
                    <h1 className="text-xl md:text-3xl font-bold mb-6 text-gray-900">
                        AI-Powered Job Match
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:max-w-[90%]">
                        {jobs.map((job) => (
                            <JobCard key={job.id} job={job} onClick={() => handleJobClick(job)} />
                        ))}
                    </div>
                </div>

                {/* Job Details (Always Visible on Desktop) */}
                <div className="hidden md:block">
                    {selectedJob && <JobDetails job={selectedJob} />}
                </div>
            </div>

            {/* Mobile Job Details Modal */}
            {isModalOpen && selectedJob && (
                <MobileJobDetails
                    job={selectedJob}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}
