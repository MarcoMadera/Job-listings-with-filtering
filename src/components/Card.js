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
        <div className="card__container__data">
          <h5 className="card__container__data__title">
            {props.company}
            {props.new && (
              <label className="card__container__label-new">NEW!</label>
            )}
            {props.featured && (
              <label className="card__container__label-feature">FEATURED</label>
            )}
          </h5>
          <div className="card__container__jobOffer">
            <a href="#">{props.position}</a>
          </div>
          <div className="card__container__meta">
            <span>
              {props.postedAt} &middot; {props.contract} &middot;{" "}
              {props.location}
            </span>
          </div>
          <hr />
        </div>
        <div className="card__container__skills">
          {(() => (
            <div className="card__container__skills__tags">
              <p onClick={() => props.handleClick(props.role)}>{props.role}</p>
              <p onClick={() => props.handleClick(props.level)}>
                {props.level}
              </p>
              {props.languages.map((languages, i) => (
                <p onClick={() => props.handleClick(languages)} key={i}>
                  {languages}
                </p>
              ))}
              {props.tools.map((tools, i) => (
                <p onClick={() => props.handleClick(tools)} key={i}>
                  {tools}
                </p>
              ))}
            </div>
          ))()}
        </div>
      </div>
    </div>
  );
};

export default Card;
