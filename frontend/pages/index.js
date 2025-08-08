import { useEffect, useState } from 'react';

export default function Home() {
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/builds')
      .then(res => res.json())
      .then(data => setBuilds(data.builds))
      .catch(err => console.error("Failed to fetch builds", err));
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">CI/CD Dashboard</h1>

      <table className="w-full bg-white shadow-md rounded">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="text-left px-4 py-2">ID</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-4 py-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {builds.map(build => (
            <tr key={build.id} className="border-t">
              <td className="px-4 py-2">{build.id}</td>
              <td className="px-4 py-2">{build.status}</td>
              <td className="px-4 py-2">{build.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
