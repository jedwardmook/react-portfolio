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
      <div className={styles['header-container']}>
        <h2><a className={styles.logo} href='#home'>John E Mook</a></h2>
        <NavLinks
          navLinks={navLinks}
          linksStyle={styles.nav}
          styles={styles}
        />
        <button onClick={handleOpen} className={styles['nav-button']}><img src={isOpen ? close : menu}/></button>
      </div>
      {isOpen &&
      <div className={styles['mobile-active']}>
        <NavLinks
          navLinks={navLinks}
          linksStyle={isOpen ? styles['mobile-open'] : styles['mobile-closed']}
          handleOpen={handleOpen}
          styles={styles}
        />
      </div>
      }
    </header>
  )
}

export default Header