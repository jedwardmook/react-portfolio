import styles from './header.module.css';
import NavLinks from './NavLinks'
import menu from '../icons/menu.svg'
import close from '../icons/close.svg'
import { useState } from 'react';


function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    "Home",
    "Projects",
    "Contact"
  ];

  return (
    <header>
      <div className={styles.header}>
        <h2><a className={styles.logo} href='#home'>John E Mook</a></h2>
        <NavLinks
          navLinks={navLinks}
          style={styles.nav}
        />
        <button onClick={handleOpen} className={styles.navbutton}><img src={isOpen? close: menu}/></button>
      </div>
      {isOpen&&
      <div>
        <NavLinks
          navLinks={navLinks}
          style={isOpen? styles.mobileopen : styles.mobileclosed}
          handleOpen={handleOpen}
        />
      </div>
      }
    </header>
  )
}

export default Header