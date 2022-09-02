import profile_pic from "../assets/picture.png";
import logo_mail from "../assets/logo_mail.png";

function Info() {
  return (
    <div className="info">
      <img src={profile_pic} />
      <h1 className="info--name">Laura Smith</h1>
      <h4 className="info--skill">Frontend Developer</h4>
      <h5 className="info--web">laurasmith.website</h5>
      <button>
        <img src={logo_mail} />
        <h3>Email</h3>
      </button>
    </div>
  );
}

export default Info;
