import React, { useState } from "react";
import ProjectsHero from "./ProjectsComponents/ProjectsHero";
import ProjectFilters from "./ProjectsComponents/ProjectFilters";
import ProjectList from "./ProjectsComponents/ProjectList";
import ProjectCard from "./ProjectsComponents/ProjectCard";
import ProjectDetailsModal from "./ProjectsComponents/ProjectDetailsModal";
import CaseStudies from "./ProjectsComponents/CaseStudies";
import Testimonials from "./ProjectsComponents/Testimonials";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main>
      <ProjectsHero />
      <ProjectFilters />
      <ProjectList onProjectSelect={handleProjectSelect} />
      <CaseStudies />
      <Testimonials />
      
      <ProjectDetailsModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </main>
  );
};

export default Projects;