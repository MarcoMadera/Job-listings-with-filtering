import React from "react";
import "./css/Card.css";

const Card = (props) => {
  console.log(props.logo);
  return (
    <div className="Card">
      <div className="card_container">
        <img src={props.logo} className="BlogListView__header__preview" />
        <div className="card__container_companyName">{props.companyName}</div>
        <hr />
        <div className="card__container__skills">
          {(() =>
            props.skills.map((skills, i) => (
              <p className="BlogListView__footer__tags" key={i}>
                {skills}
              </p>
            )))()}
        </div>
      </div>
    </div>
  );
};

export default Card;
