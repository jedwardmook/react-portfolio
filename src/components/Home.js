import styles from './home.module.css';
import me from '../images/me.png';
import technologiesArr from '../assets/technologies.js';
import socialLinks from '../assets/socials.js';

function Home() {

  return (
    <section className={styles.home}>
      <img className={styles.me} src={me} alt='John Mook'/>
        <div className={styles['info-div']}>
          <h2 className={styles.hello}><strong>Hello!</strong> My name is <span>John E Mook</span>.</h2>
          <div className={styles['bio-div']}>
          <p className={styles.about}>I&apos;m a Fullstack Software Engineer building web applications out of Chicago, IL. I&apos;m experienced with html, css, sass, javascript, typescript, react, ruby, and ruby on rails.</p>
          {technologiesArr.map((obj) => {
            return <a key={obj.technology} href={obj.link}><img src={obj.icon} alt={obj.technology} className={styles.languagelink} /></a>
          })}
          <div className={styles['buttons-div']}>
            <div className={styles['socials-div']}>
              {socialLinks.map((obj) => {
                return <a key={obj.type} href={obj.address}>{obj.title}</a>
              })}
            </div>
            <div>
              <a href="#reachout" className={styles['reachout-button']}>Reach Out!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home