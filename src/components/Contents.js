import React, { useState, useEffect } from "react";
import "./css/Contents.css";
import PostCard from "../postCard";
import FilterList from "../components/FilterList";

const Contents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const posts = data.map((data, i) => (
    <PostCard
      key={data.id}
      id={data.id}
      company={data.company}
      logo={data.logo}
      new={data.new}
      featured={data.featured}
      position={data.position}
      role={data.role}
      level={data.level}
      postedAt={data.postedAt}
      contract={data.contract}
      location={data.location}
      languages={data.languages}
      tools={data.tools}
    />
  ));

  return (
    <div className="Contents">
      <div className="contents__container">
        {data.length === 0 ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div>
            <div className="contents__container__filterList">
              <FilterList languages={data[0].languages} tools={data.tools} />
            </div>
            <div className="contents__container__posts">{posts}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contents;
