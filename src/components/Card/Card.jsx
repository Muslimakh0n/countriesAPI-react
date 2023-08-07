import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ name, flag, population, region, capital }) {
  return (
    <Link
      className="col-3 cards mb-3"
      style={{ width: "280px" }}
      to={`/country/${name}`}
    >
      <div className="card-border">
        <img
          className="img-fluid rounded-0 rounded-top"
          style={{ height: "160px", width: "280px" }}
          src={flag}
          alt={name}
        />
        <div className="card-body">
          <h4 style={{ height: "40px", overflow: "hidden", padding: "10px 0" }}>
            {name}
          </h4>
          <ul className="list-unstyled">
            <li>
              <strong>Population: </strong>
              {population}
            </li>
            <li>
              <strong>Region: </strong>
              {region}
            </li>
            <li>
              <strong>Capital: </strong>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default Card;
