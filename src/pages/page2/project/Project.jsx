import React, { useEffect, useState } from 'react';
import './Project.css';
import CardDetails from './CardDetails';
import { db } from '../../../firebaseConfig'; // Adjust path as needed
import { collection, getDocs } from 'firebase/firestore';

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setError("Failed to load projects.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className='project-page'><div className="loader"></div></div>;
  }

  if (error) {
    return <div className='project-page'><p>{error}</p></div>;
  }

  return (
    <div className='project-page'>
      <div className='project-container'>
        <div className="more-projects">
          <p>Stay with us—more projects are on the horizon!</p>
        </div>
        <div className="container">
          {projects.slice(0, 3).map(project => (
            <div key={project.id} className="card">
              <CardDetails project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
