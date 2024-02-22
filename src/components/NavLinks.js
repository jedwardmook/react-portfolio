import PropTypes from 'prop-types';

function NavLinks({navLinks, style, handleOpen}) {

  return (
    <nav onClick={handleOpen}>
      <ul className={style}>
        {
          navLinks.map((link, index) => {
            return (
              <li key={index}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
            )
          })
        }
      </ul>
    </nav>
  )
}

NavLinks.propTypes = {
  navLinks : PropTypes.array.isRequired,
  style: PropTypes.string,
  handleOpen: PropTypes.func
};

export default NavLinks

