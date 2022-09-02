import logo_fb from "../assets/logo_fb.png";
import logo_github from "../assets/logo_github.png";
import logo_ig from "../assets/logo_ig.png";
import logo_li from "../assets/logo_li.png";
import logo_twitter from "../assets/logo_twitter.png";

function Footer() {
  return (
    <footer>
      <img src={logo_twitter} />
      <img src={logo_fb} />
      <img src={logo_ig} />
      <img src={logo_li} />
      <img src={logo_github} />
    </footer>
  );
}

export default Footer;
