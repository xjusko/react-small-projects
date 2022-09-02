import map_point from "../assets/map_point.png";

function Card(props) {
  props = props.data;
  return (
    <div className="card">
      <img className="card--image" src={props.imageUrl} />
      <div className="card--info">
        <div className="card--location">
          <img src={map_point} />
          <p className="card--location_name">{props.location}</p>
          <a className="card--location_link" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
