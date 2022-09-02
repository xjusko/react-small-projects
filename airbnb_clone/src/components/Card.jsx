import star from "../../public/assets/star.png";

function Card(props) {
  let badgeText;
  props = props.cardData;
  if (props.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else if (props.location == "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <article>
        <picture className="card--pic">
          <source srcSet={`../../public/assets/${props.coverImg}`} />
          <img src={`../../public/assets/${props.coverImg}`} alt="pic" />
        </picture>
        {badgeText && <p className="card--availability">{badgeText}</p>}
      </article>
      <div className="card--rating">
        <img className="card--star" src={star} />
        <span> {props.stats.rating}</span>
        <span className="grey">
          {" "}
          ({props.stats.reviewCount}) · {props.location}
        </span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From {props.price}$ </span> / person
      </p>
    </div>
  );
}

export default Card;
