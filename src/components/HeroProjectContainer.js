import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useState } from 'react'
import ProjectImagesViewer from './ProjectImagesViewer';

function HeroProjectContainer({styles, heroProject}) {
  const {projectName, images, technologiesUsed, links, description} = heroProject
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const tech = technologiesUsed.map((tech, index) => {
    if (index !== technologiesUsed.length - 1)
      return `${tech},`
    else
      return `${tech}`
  })

  const link = links.map((obj, index) => {
    return (
      <p className={styles['hero-project-value']} key={index}>
        <a className={styles['hero-project-value-link']} href={obj.link} rel='noreferrer' target='_blank'>{obj.type}</a>
      </p>
    )
  })

  return (
    <div className={styles['hero-project-container']}>
      <div className={styles['hero-project-image-container']}>
        <img className={styles['hero-project-image']} src={images[0].link} onClick={() => setIsViewerOpen(!isViewerOpen)} />
        <button className={styles['hero-project-image-button']} onClick={() => setIsViewerOpen(!isViewerOpen)}>click for more images</button>
      </div>
      <div className={styles['hero-project-info-container']}>
        <h5 className={styles['hero-project-key']}>Project: </h5><p className={styles['hero-project-value']}>{projectName}</p>
        <h5 className={styles['hero-project-key']}>Technologies: </h5><p className={styles['hero-project-value']}>{tech}</p>
        <h5 className={styles['hero-project-key']}>Description: </h5><p className={styles['hero-project-value']}>{description}</p>
        <h5 className={styles['hero-project-key']}>Links: </h5>{link}
      </div>
      {createPortal(
        <ProjectImagesViewer
          styles = {styles}
          images = {images}
          isViewerOpen = {isViewerOpen}
          setIsViewerOpen = {setIsViewerOpen}
        />,
        document.getElementById('modal-root')
      )}
    </div>
  )
}

HeroProjectContainer.propTypes = {
  styles: PropTypes.object,
  heroProject: PropTypes.object.isRequired,
}

export default HeroProjectContainer