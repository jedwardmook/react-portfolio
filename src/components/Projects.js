import styles from './projects.module.css'


function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles['project-container']}>
        <h2>Projects</h2>
      </div>
    </section>
  )
}

export default Projects