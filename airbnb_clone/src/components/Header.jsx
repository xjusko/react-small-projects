import airbnb_logo from "../../public/assets/airbnb.png";

function Header() {
  return (
    <nav>
      <img className="nav--logo" src={airbnb_logo} />
    </nav>
  );
}

export default Header;
