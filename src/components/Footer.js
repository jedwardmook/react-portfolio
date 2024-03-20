import './footer.module.css';
import socialLinks from '../data/socials.js';

function Footer() {
  return (
    <footer>
      <div></div>
      <p>© Copyright 2023 John E. Mook</p>
      <div>
        {socialLinks.map((link) => {
          return (
            <a key={link.title} href={link.address} rel='noreferrer' target='_blank'>
              <img src={link.icon} alt={link.title} />
            </a>
          )
        })
        }
      </div>
    </footer>
  )
}

export default Footer