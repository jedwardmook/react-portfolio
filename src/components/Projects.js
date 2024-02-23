import { useState } from 'react'
import HeroProjectContainer from './HeroProjectContainer'
import styles from './projects.module.css'
import projects from '../data/projects.js'

function Projects() {
  // eslint-disable-next-line no-unused-vars
  const [heroProject, setHeroProject] = useState(projects[0])

  return (
    <section id='projects' className={styles.projects}>
      <div className={styles['project-container']}>
        <h2>Projects</h2>
        <HeroProjectContainer
          styles={styles}
          heroProject={heroProject}
        />
      </div>
    </section>
  )
}

export default Projects