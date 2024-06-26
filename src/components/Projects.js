import { useState } from 'react';
import HeroProjectContainer from './HeroProjectContainer';
import styles from './projects.module.css';
import projects from '../data/projects.js';
import ProjectsContainer from './ProjectsContainer.js';


function Projects() {
  const [heroProject, setHeroProject] = useState(projects[0]);

  // const handleProjectContainerClick = (project) => {
  //   setHeroProject(project);
  //   const title = document.getElementsByClassName('projects-title');
  //   title.scrollTo(0,);
  // };

  return (
    <section id='projects' className={styles.projects}>
      <div className={styles['project-container']}>
        <h2 className={styles['projects-title']}>Projects</h2>
        <HeroProjectContainer
          styles={styles}
          heroProject={heroProject}
        />
        <ProjectsContainer
          styles = {styles}
          projects = {projects}
          setHeroProject = {setHeroProject}
        />
      </div>
    </section>
  );
}

export default Projects;