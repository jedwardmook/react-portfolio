import styles from './footer.module.css';
import socialLinks from '../data/socials.js';

function Footer() {
  return (
    <footer>
      <div></div>
      <p className={styles['footer-text']}>© Copyright 2023 John E. Mook</p>
      <div>
        {socialLinks.map((link) => {
          return (
            <a
              key={link.title}
              href={link.address}
              rel='noreferrer'
              target='_blank'
            >
              <img
                src={link.icon}
                alt={link.title}
                className={styles['footer-image']}
              />
            </a>
          );
        })
        }
      </div>
    </footer>
  );
}

export default Footer;