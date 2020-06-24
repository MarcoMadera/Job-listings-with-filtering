import React from "react";
import "./css/Card.css";

const Card = (props) => {
  let handleClick = () => console.log(this);
  return (
    <div className="Card">
      <div className="card__container">
        <img src={props.logo} className="card__container__logo" />
        <div className="card__container_companyName">
          <h5>{props.companyName}</h5>
        </div>
        <div className="card__container__jobOffer">
          <h2>{props.jobOffer}</h2>
        </div>
        <div className="card__container__meta">
          <span className="card__container__meta__date">{props.dateOffer}</span>
          <span className="card__container__meta__workTime">
            {props.workTime}
          </span>
          <span className="card__container__meta__area">{props.area}</span>
        </div>
        <hr />
        <div className="card__container__skills">
          {(() =>
            props.skills.map((skills, i) => (
              <a
                onClick={handleClick}
                className="card__container__skills__tags"
                key={i}
              >
                {skills}
              </a>
            )))()}
        </div>
      </div>
    </div>
  );
};

export default Card;
