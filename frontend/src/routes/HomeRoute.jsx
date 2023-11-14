import React from 'react';
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { topics, fetchPhotosByTopic,...otherProps } = props;

  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics} 
        isFavPhotoExist={props.favPhotos.length > 0}
        fetchPhotosByTopic={fetchPhotosByTopic}/>
      <PhotoList {...otherProps}/>
    </div>
  );
};

export default HomeRoute;