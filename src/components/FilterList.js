import React from "react";
import "./css/FilterList.css";

import Skill from "./Skill";

const FilterList = (props) => {
  console.log(props);
  let sum = [];

  function eliminateDuplicates(arr) {
    let out = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = 0;
    }
    for (let i in obj) {
      out.push(i);
    }
    return out;
  }
  const res = eliminateDuplicates(sum);

  return (
    <div className="FilterList">
      <div className="filterList__container">
        <div className="filterList__container__filter">
          {(() => res.map((skill, i) => <Skill skill="ee" key={i} />))()}
        </div>
        <div className="filterList__container__clear">
          <p>Clear</p>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
