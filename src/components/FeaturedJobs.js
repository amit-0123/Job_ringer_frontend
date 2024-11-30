import React, {useRef} from "react";
import JobCard from "./JobCard";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
 
  const scrollContainerRef = useRef(null);

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
    {
      title: "Full Stack Developer",
      company: "TalentPret",
      type: "Full Time -Permanent",
      experience: "2-4 Years",
      location: "In Office job",
    },
    {
      title: "Full Stack Developer",
      company: "TalentPret",
      type: "Full Time -Permanent",
      experience: "2-4 Years",
      location: "In Office job",
    },
    {
      title: "Full Stack Developer",
      company: "TalentPret",
      type: "Full Time -Permanent",
      experience: "2-4 Years",
      location: "In Office job",
    },
  ];

  const scroll = (direction)=>{
    if(scrollContainerRef.current){
      const{scrollLeft,clientWidth} = scrollContainerRef.current;
      const scrollAmount = direction === "left"?-clientWidth:clientWidth;
      scrollContainerRef.current.scrollTo({
        left:scrollLeft+scrollAmount,
        behavior:"smooth",
      });
    }
  };

  return (
    <section style= {{marginTop:30}}    className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="carousel">
        <button className="arrow left-arrow" onClick={() => scroll("left")}>
          &#8249;
        </button>
        <div className="jobs-container" ref={scrollContainerRef}>
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        <button className="arrow right-arrow" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
