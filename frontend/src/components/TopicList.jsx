import React from "react";

import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";

import "../styles/TopicList.scss";

const TopicList = () => {
  const topicsElem = topics.map((topic) => (
    <TopicListItem key={topic.id} {...topic} />
  ));
  return (
    <div className="top-nav-bar__topic-list">{topicsElem}</div>
  );
};

export default TopicList;
