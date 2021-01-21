import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setDataLoaded(true);
      })
      .catch((error) => console.log("Error: ", error));
  }, []);

  if (dataLoaded) {
    return (
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <h1>Test</h1>
      </section>
    );
  } else {
    return (
      <section className="section">
        <div className="loading">
          <h2>Loading ...</h2>
        </div>
      </section>
    );
  }
}

export default App;
