import React, { useState, useEffect, Fragment } from "react";
import "./css/Contents.css";
import Card from "../components/Card";
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

  const [filters, setFilters] = useState([]);

  const collectTags = ({ role, level, tools, languages }) => {
    const tags = [role, level];
    if (filters.length === 0) {
      return true;
    }

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  };

  const handleRemoveClick = (tag) => {
    setFilters(filters.filter((random) => random !== tag));
  };

  const handleClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleClearClick = () => {
    setFilters([]);
  };

  const filteredData = data.filter(collectTags);
  const posts = filteredData.map((data, i) => (
    <li key={data.id}>
      <Card
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
        handleClick={handleClick}
      />
    </li>
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
          <Fragment>
            <div className="contents__container__filterList">
              <FilterList
                key={data.id}
                languages={data[0].languages}
                tools={data.tools}
                filters={filters}
                handleRemoveClick={handleRemoveClick}
                handleClearClick={handleClearClick}
                id={data.id}
              />
            </div>
            <ul className="contents__container__posts">{posts}</ul>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Contents;
