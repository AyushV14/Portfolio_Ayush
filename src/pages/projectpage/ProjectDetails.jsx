import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './ProjectDetails.css';


const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const projectDoc = doc(db, 'projects', id);
      const projectSnapshot = await getDoc(projectDoc);
      if (projectSnapshot.exists()) {
        setProject({ id: projectSnapshot.id, ...projectSnapshot.data() });
      } else {
        console.error("Project not found!");
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (!project) {
    return (
      <div className='project-details'>
      <div className='loading'>
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

    <div className='project-details'>
      <button className='back-button' onClick={() => navigate(-1)}>Back</button> {/* Back Button */}
      <img src={project.imgUrl} alt={project.name} className='project-picture' />
      <div className='project-content'>
        <h1>{project.name}</h1>
        <p className='project-description'>{project.description}</p>
        <p className='project-notes'><strong>Notes:</strong> {project.notes}</p>
        <p className='project-techstack'><strong>Tech Stack:</strong> {project.techStack}</p>
        <p className='project-keywords'><strong>Keywords:</strong> {project.keywords}</p>
        <p className='project-status'><strong>Status:</strong> {project.status}</p>
        <p className='project-date'><strong>Project Date:</strong> {project.projectDate}</p>
        <p className='project-responsive'><strong>Responsive:</strong> {project.isResponsive ? 'Yes' : 'No'}</p>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className='live-demo'>Live Demo</a>
      </div>

    </div>
  );
};

export default ProjectDetails;
