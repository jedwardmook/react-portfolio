import styles from './header.module.css';
import NavBar from './NavBar'

function Header() {

    const navLinks = {
        "/" : "Home",
        "/projects" : "Projects",
        "/contact": "Contact"
    }

  return (
    <div className={styles.header}>
        <h4><a href='/'>John E Mook</a></h4>
        <NavBar 
          navLinks = {navLinks}
          style = {styles}
        />
    </div>
  )
}

export default Header