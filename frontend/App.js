import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/builds')
      .then(response => setBuilds(response.data.builds))
      .catch(error => console.error('Error fetching builds:', error));
  }, []);

  return (
    <div>
      <h1>CI/CD Dashboard</h1>
      <ul>
        {builds.map(build => (
          <li key={build.id}>
            <strong>Status:</strong> {build.status} | <strong>Duration:</strong> {build.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

