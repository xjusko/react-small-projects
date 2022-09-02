import logo from "../navbar_logo.png";
function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--logo" />
      <h2 className="nav--logo_text">ReactFacts</h2>
      <h3 className="nav--title">React Course - Project 1</h3>
    </nav>
  );
}

export default Navbar;
