import styles from './home.module.css';
import me from '../images/me.png';
import javascript from '../icons/javascript.svg'
import css from '../icons/css.svg'

function Home() {

  // const socialLinks = [
  //   {
  //     github: {
  //       address: "https://github.com/jedwardmook",
  //       title: "Github"
  //     }
  //   },
  //   {
  //     linkedIn: {
  //       address: "https://www.linkedin.com/in/johnemook/",
  //       title: "LinkedIn"
  //     }
  //   },
  //   {
  //     blog: {
  //       address: "",
  //       title: "Blog"
  //     }
  //   }
  // ]

  return (
    <section className={styles.home}>
      <img className={styles.me} src={me} alt='John Mook'/>
        <div className={styles.infodiv}>
          <h2 className={styles.hello}><strong>Hello!</strong> My name is <span>John E Mook</span>.</h2>
          <div className={styles.straightendiv}>
          <p className={styles.about}>I&apos;m a Fullstack Software Engineer building web applications out of Chicago, Il. I&apos;m experienced with html, css, sass, javascript, typescript, react, ruby, and ruby on rails.</p>
          <a href='https://www.javascript.com/'><img src={javascript} alt="javascript" className={styles.languagelink} /></a>
          <a href='https://www.w3.org/Style/CSS/Overview.en.html'><img src={css} alt="css" className={styles.languagelink} /></a>
          <div className={styles.buttonsdiv}>
            <div className={styles.socialsdiv}>
              <a>Github</a>
              <a>LinkedIn</a>
              <a>Blog</a>
            </div>
            <div>
              <button>Reach Out!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home