import PropTypes from 'prop-types';

function NavBar({navLinks, style}) {

    const linksToDisplay = Object.entries(navLinks).map(([href, label]) => {
        return (
            <li key={href}>
                <a href={href}>{label}</a>
            </li>
        )
    })

  return (
    <nav>
        <ul className={style.nav}>
            {linksToDisplay}
        </ul>
    </nav>
  )
}

      NavBar.propTypes = {
        navLinks : PropTypes.object.isRequired,
        style: PropTypes.object
      };



export default NavBar

