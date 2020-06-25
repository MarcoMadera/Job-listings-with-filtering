import React from "react";
import "./css/Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="card__container">
        <img src={props.logo} className="card__container__logo" />
        <div className="card__container_companyName">
          <h5>{props.company}</h5>
        </div>
        <div className="card__container__jobOffer">
          <h2>{props.position}</h2>
        </div>
        <div className="card__container__meta">
          <span>
            {props.postedAt} &middot; {props.contract} &middot; {props.location}
          </span>
        </div>
        <hr />
        <div className="card__container__skills">
          {(() => (
            <div>
              <a className="card__container__skills__tags">{props.role}</a>
              <a className="card__container__skills__tags">{props.level}</a>
              {props.languages.map((languages, i) => (
                <a className="card__container__skills__tags" key={i}>
                  {languages}
                </a>
              ))}
              {props.tools.map((tools, i) => (
                <a className="card__container__skills__tags" key={i}>
                  {tools}
                </a>
              ))}
            </div>
          ))()}
        </div>
      </div>
    </div>
  );
};

export default Card;
