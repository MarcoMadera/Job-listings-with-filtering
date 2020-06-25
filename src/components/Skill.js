import React from "react";
import "./css/Skill.css";
import iconRemove from "../images/icon-remove.svg";

const Skill = (props) => {
  return (
    <div className="Skill" key={props.id}>
      <div className="skill__container">
        <a>{props.skill}</a>
      </div>
      <div
        className="skill__container__remove"
        onClick={() => {
          props.handleRemoveClick(props.skill);
        }}
      >
        <img src={iconRemove} alt="remove" />
      </div>
    </div>
  );
};

export default Skill;
