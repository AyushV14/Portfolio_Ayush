import React, { useEffect, useState } from 'react';
import Navbar from '../page1/Navbar';
import ProjectCard from './ProjectCard'; // Assuming you've created this
import { db } from '../../firebaseConfig'; // Import your Firestore database
import { collection, getDocs } from 'firebase/firestore';
import './Projectpage.css';

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects'); // Adjust to your Firestore collection name
        const projectSnapshot = await getDocs(projectsCollection);
        const projectList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectList);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className='ProjectPage'>
      <div className="loading">
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
      </div>      
      </div>
      </div>
    );
  }

  return (
    <div className='ProjectPage'>
      <Navbar />
      <h1 className='h1'>Projects</h1>
      
        <div className='project-list'>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      
    </div>
  );
  
}
