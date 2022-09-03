import header_logo from "../assets/troll_face.png";

function Header() {
  return (
    <div className="header">
      <img className="header--logo" src={header_logo} alt="image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--sidetext">React Course - Project 3</h4>
    </div>
  );
}

export default Header;
