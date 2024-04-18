import './navbar.css'

const NavBar = (props) => {
  return (
    <div className='nav'>
      <div className="nab-logo">EV-olution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contant</li>
      </ul>
    </div>
  )
};

export default NavBar;
