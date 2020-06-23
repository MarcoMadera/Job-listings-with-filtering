import React from "react";
import Card from "./components/Card";

const PostCard = (props) => {
  return (
    <li>
      <Card
        id={props.id}
        companyName={props.companyName}
        logo={props.logo}
        jobOffer={props.jobOffer}
        dateOffer={props.dateOffer}
        workTime={props.workTime}
        area={props.area}
        skills={props.skills}
      />
    </li>
  );
};

export default PostCard;
