import React from "react";
import "./css/FilterList.css";

import Skill from "./Skill";

const FilterList = (props) => {
  return (
    <div className="FilterList">
      {props.filters.length > 0 && (
        <div className="filterList__container" key={props.id}>
          <div className="filterList__container__filter">
            {props.filters.map((skill, i) => (
              <Skill
                key={i}
                skill={skill}
                handleRemoveClick={props.handleRemoveClick}
              />
            ))}
          </div>
          <div
            className="filterList__container__clear"
            onClick={() => props.handleClearClick()}
          >
            <p>Clear</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterList;
