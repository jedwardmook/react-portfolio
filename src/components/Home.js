import styles from './home.module.css';
import me from '../images/me.png';
import technologiesArr from '../data/technologies.js';
import socialLinks from '../data/socials.js';

function Home() {

  return (
    <section className={styles.home}>
      <img className={styles.me} src={me} alt='John Mook'/>
        <div className={styles['info-container']}>
          <h2 className={styles.hello}><strong>Hello!</strong> My name is <span>John E Mook</span>.</h2>
          <div className={styles['bio-container']}>
            <p className={styles.about}>I&apos;m a Fullstack Software Engineer building web applications out of Chicago, IL. I&apos;m experienced with html, css, sass, javascript, typescript, react, ruby, and ruby on rails.</p>
            {technologiesArr.map((obj) => {
              return <a key={obj.technology} href={obj.link} rel='noreferrer' target='_blank'><img src={obj.icon} alt={obj.technology} className={styles.languagelink} /></a>
            })}
            <div className={styles['buttons-container']}>
              <div className={styles['socials-container']}>
                {socialLinks.map((obj) => {
                  return <a key={obj.type} href={obj.address} rel='noreferrer' target='_blank'>{obj.title}</a>
                })}
              </div>
            <div>
              <a href="#contact" className={styles['reachout-button']}>Reach Out!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home