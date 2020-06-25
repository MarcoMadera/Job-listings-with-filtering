import React from "react";
import "./css/Card.css";

const Card = (props) => {
  let topic;
  if (props.new && props.featured) {
    topic = "topic";
  }

  return (
    <div className="Card">
      <div className={`card__container ${topic}`}>
        <img src={props.logo} className="card__container__logo" />
        <h5>
          {props.company}
          {props.new && (
            <label className="card__container__label-new">NEW</label>
          )}
          {props.featured && (
            <label className="card__container__label-feature">FEATURED</label>
          )}
        </h5>
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
            <div className="card__container__skills__tags">
              <a onClick={() => props.handleClick(props.role)}>{props.role}</a>
              <a onClick={() => props.handleClick(props.level)}>
                {props.level}
              </a>
              {props.languages.map((languages, i) => (
                <a onClick={() => props.handleClick(languages)} key={i}>
                  {languages}
                </a>
              ))}
              {props.tools.map((tools, i) => (
                <a onClick={() => props.handleClick(tools)} key={i}>
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
