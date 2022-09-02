import globe_logo from "../assets/globe_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={globe_logo} />
      <p>my travel journal</p>
    </nav>
  );
}

export default Navbar;
