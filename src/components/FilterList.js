import React from "react";
import "./css/FilterList.css";
import { data } from "../data";

import Skill from "./Skill";

const FilterList = (props) => {
  const handleClick = () => {
    console.log("");
  };

  let sum = [];
  data.map(
    ({ id, skills }, i) => {
      for (let i = 0; i < skills.length; i++) {
        if (skills[i] != skills[i - 1]) sum.push(skills[i]);
      }
    }
    // skills.map(({ skills }, i) => console.log(skills[i + 1]))
  );

  function eliminateDuplicates(arr) {
    let i;
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
  console.log(res);

  return (
    <div className="FilterList">
      <div className="filterList__container">
        <div className="filterList__container__filter">
          {(() => res.map((skill, i) => <Skill skill={skill} key={i} />))()}
        </div>
        <div className="filterList__container__clear">
          <p>Clear</p>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
