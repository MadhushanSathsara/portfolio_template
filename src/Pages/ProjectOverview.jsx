import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectData';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';
import './ProjectOverview.css';
import { Link } from 'react-router-dom';

function ProjectOverview() {
  
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loader />;

  if (!project) {
    return <h2 className="project-not-found">Project not found.</h2>;
  }

  return (
    <motion.div
      className="project-overview-card"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >

      <Link to="/" className="backto"> Back To Home</Link>
      
      <img src={project.image} alt={project.title} className="project-img" />
      <h1 className="project-title">{project.title}</h1>
      <p className="project-description"><strong>Description:</strong> {project.description}</p>
      <p className="project-description"><strong>Scope:</strong> {project.scope}</p>
      <p className="project-description"><strong>Start Date:</strong> {project.startDate}</p>
      <p className="project-description"><strong>End Date:</strong> {project.endDate}</p>


    </motion.div>
    
  );
}

export default ProjectOverview;
