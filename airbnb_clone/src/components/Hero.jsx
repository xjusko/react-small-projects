import photogrid from "../../public/assets/photogrid.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero--photo" src={photogrid} />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
