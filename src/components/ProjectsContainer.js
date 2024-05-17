import PropTypes from 'prop-types';
import { useState } from 'react';

function ProjectsContainer({styles, projects, setHeroProject}) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  const handleProgress = () => {
    if (endIndex !== projects.length) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  const handleDegress = () => {
    if (startIndex !== 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  return (
    <div className={styles['projects-carousel']}>
      <p className={styles['project-title']}>Click to View Project</p>
      <div className={styles['projects-tray']}>
        <button
          onClick={handleDegress}
          className={styles['projects-tray-button']}
          disabled={startIndex === 0}
        >{'<'}
        </button>
        {projects.slice(startIndex, endIndex).map((project, index) => {
          return (
            <a href='#projects' key={index} className={styles['project-card-link']}>
              <div className={styles['project-card']} onClick={() => setHeroProject(project)}>
                <img src={project.images[0].link} alt={project.images[0].description} className={styles['project-image']} />
                <p className={styles['project-title']}>{project.projectName}</p>
              </div>
            </a>
          );
        })}
        <button
          onClick={handleProgress}
          className={styles['projects-tray-button']}
          disabled={endIndex === projects.length}
        >{'>'}
        </button>
      </div>
    </div>
  );
}

ProjectsContainer.propTypes = {
  styles : PropTypes.object,
  projects : PropTypes.array,
  setHeroProject : PropTypes.func
};

export default ProjectsContainer;