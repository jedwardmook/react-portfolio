import PropTypes from 'prop-types';

function HeroProjectContainer({styles, heroProject}) {
  const {projectName, images, technologiesUsed, links, description} = heroProject

  const tech = technologiesUsed.map((tech, index) => {
    if (index !== technologiesUsed.length - 1)
      return `${tech},`
    else
      return `${tech}`
  })

  const link = links.map((obj, index) => {
    return <p key={index}><a href={obj.link}>{obj.type}</a></p>
  })

  return (
    <div className={styles['hero-project-container-div']}>
      <div className={styles['hero-project-image-div']}>
        <img src={images[0].link} />
        <p>click for more images</p>
      </div>
      <div className={styles['hero-project-info-div']}>
        <h5>Project: </h5><p>{projectName}</p>
        <h5>Technologies: </h5><p>{tech}</p>
        <h5>Description: </h5><p>{description}</p>
        <h5>Links: </h5>{link}
      </div>
    </div>
  )
}

HeroProjectContainer.propTypes= {
  styles : PropTypes.object,
  heroProject: PropTypes.object.isRequired
}

export default HeroProjectContainer