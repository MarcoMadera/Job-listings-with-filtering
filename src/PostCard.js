import React from "react";
import Card from "./components/Card";

const PostCard = (props) => {
  console.log(props);
  return (
    <li key={props.id}>
      <Card
        key={props.id}
        id={props.id}
        company={props.company}
        logo={props.logo}
        new={props.isNew}
        featured={props.featured}
        position={props.position}
        role={props.role}
        level={props.level}
        postedAt={props.postedAt}
        contract={props.contract}
        location={props.location}
        languages={props.languages}
        tools={props.tools}
      />
    </li>
  );
};

export default PostCard;
