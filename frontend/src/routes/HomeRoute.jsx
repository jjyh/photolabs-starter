import React from 'react';
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
//  const { favPhotos, addFavPhoto, delFavPhoto, setModal } = props;  

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={props.favPhotos.length > 0} />
      <PhotoList {...props}/>
    </div>
  );
};

export default HomeRoute;
