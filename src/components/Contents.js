import React from "react";
import "./css/Contents.css";
import { data } from "../data";
import PostCard from "../postCard";

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
        <div className="contents__container__card">{posts}</div>
      </div>
    </div>
  );
};

export default Contents;
