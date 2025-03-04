import { create } from "zustand";
import { Job } from "../types/job";

interface JobStore {
    jobs: Job[];
    fetchJobs: () => Promise<void>;
}

export const useJobStore = create<JobStore>((set) => ({
    jobs: [],
    fetchJobs: async () => {
        const mockJobs: Job[] = [
            {
                id: 1,
                title: "Frontend Developer",
                company: "Tech Corp",
                location: "Remote",
                salary: "$70,000 - $90,000",
                requiredSkills: ["React", "TypeScript", "Tailwind CSS"],
                matchScore: 85,
            },
            {
                id: 2,
                title: "UI Engineer",
                company: "DesignPro",
                location: "NY, USA",
                salary: "$80,000 - $100,000",
                requiredSkills: ["Figma", "React", "CSS"],
                matchScore: 70,
            },
        ];
        set({ jobs: mockJobs });
    },
}));
