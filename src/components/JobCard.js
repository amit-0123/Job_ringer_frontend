import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaClock } from "react-icons/fa";

import "./FeaturedJobs.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <span class="job-type">In-Office job</span>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>
        <FaClock /> {job.type}
      </p>
      <p>
        <FaBriefcase /> {job.experience}
      </p>
      <p>
        <FaMapMarkerAlt /> {job.location}
      </p>
      <button className="apply">Apply</button>
    </div>
  );
};

export default JobCard;
