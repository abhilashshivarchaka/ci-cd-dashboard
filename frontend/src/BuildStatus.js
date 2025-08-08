import React, { useEffect, useState } from 'react';

function BuildStatus() {
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/builds")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched builds:", data);
        setBuilds(data.builds);
      })
      .catch((err) => console.error("Error fetching builds:", err));
  }, []);

  return (
    <div>
      <h2>CI/CD Build Status</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {builds.length > 0 ? (
            builds.map((build) => (
              <tr key={build.id}>
                <td>{build.id}</td>
                <td>{build.status}</td>
                <td>{build.duration}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No build data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BuildStatus;

