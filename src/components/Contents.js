import React from "react";
import "./css/Contents.css";
import { data } from "../data";
import PostCard from "../postCard";
import FilterList from "../components/FilterList";

const Contents = () => {
  const posts = data.map(
    (
      { id, companyName, logo, jobOffer, dateOffer, workTime, area, skills },
      i
    ) => (
      <PostCard
        key={id}
        id={id}
        companyName={companyName}
        logo={logo}
        jobOffer={jobOffer}
        dateOffer={dateOffer}
        workTime={workTime}
        area={area}
        skills={skills}
      />
    )
  );

  return (
    <div className="Contents">
      <div className="contents__container">
        <div className="contents__container__filterList">
          <FilterList />
        </div>
        <div className="contents__container__posts">{posts}</div>
      </div>
    </div>
  );
};

//<FilterList key={id} id={id + i} skills={skills[i]} />;
export default Contents;
