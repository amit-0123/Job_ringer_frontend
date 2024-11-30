import React from 'react'
import JobCard from "./JobCard";
import "./FeaturedJobs.css";



const RemoteJobs = () => {
  // Hardcoded job data for now
  const jobs = [
    {
      title: "HR Executive",
      company: "AB InBev GCC India",
      type: "Full time -Permanent",
      experience: "6-7 Years",
      location: "In Office job",
    },
    {
      title: "Software Developer",
      company: "GRNconnect.com",
      type: "Part Time -Internship",
      experience: "3-4 Years",
      location: "Remote job",
    },
    {
      title: "Senior Project Manager",
      company: "Tredence Inc.",
      type: "Part Time -Internship",
      experience: "2-3 Years",
      location: "Hybrid job",
    },
    {
      title: "Full Stack Developer",
      company: "TalentPret",
      type: "Full Time -Permanent",
      experience: "2-4 Years",
      location: "In Office job",
    },
  ];

  return (
    <section className="featured-jobs remote-jobs">
      <h2>Remote Jobs</h2>
      <div className="jobs-container">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </section>
  );
};

export default RemoteJobs