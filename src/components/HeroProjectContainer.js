import PropTypes from 'prop-types';

function HeroProjectContainer({styles, heroProject}) {
  const {projectName, images,} = heroProject

  return (
    <div className={styles['hero-project-container-div']}>
      <div className={styles['hero-project-image-div']}>
        <img src={images[0].link} />
        <p>click for more images</p>
      </div>
      <div>
        <p>Project: {projectName}</p>
      </div>
    </div>
  )
}

HeroProjectContainer.propTypes= {
  styles : PropTypes.object,
  heroProject: PropTypes.object.isRequired
}

export default HeroProjectContainer