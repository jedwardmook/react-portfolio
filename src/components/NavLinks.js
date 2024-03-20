import PropTypes from 'prop-types';

function NavLinks({navLinks, linksStyle, handleOpen, styles}) {

  return (
    <nav onClick={handleOpen}>
      <ul className={linksStyle}>
        {
          navLinks.map((link, index) => {
            return (
              <li key={index}><a className={styles['nav-link']} href={`#${link.toLowerCase()}`}>{link}</a></li>
            )
          })
        }
      </ul>
    </nav>
  )
}

NavLinks.propTypes = {
  navLinks: PropTypes.array.isRequired,
  linksStyle: PropTypes.string,
  handleOpen: PropTypes.func,
  styles: PropTypes.object
};

export default NavLinks

