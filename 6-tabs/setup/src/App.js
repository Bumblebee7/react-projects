import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => console.log("Error: ", error));
  }, []);

  if (isLoading) {
    return (
      <section className="section">
        <div className="loading">
          <h2>Loading ...</h2>
        </div>
      </section>
    );
  }

  const { title, company, dates, duties } = jobs[selectedJob];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                type="button"
                className={`job-btn ${index === selectedJob && "active-btn"}`}
                onClick={() => {
                  setSelectedJob(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
