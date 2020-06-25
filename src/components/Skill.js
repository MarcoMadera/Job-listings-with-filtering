import React from "react";
import "./css/Skill.css";
import iconRemove from "../images/icon-remove.svg";

const Skill = (props) => {
  const handleClick = () => {};
  return (
    <div className="Skill">
      <div className="skill__container">
        <a>{props.skill}</a>
      </div>
      <div className="skill__container__remove">
        <img src={iconRemove} alt="remove" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Skill;
