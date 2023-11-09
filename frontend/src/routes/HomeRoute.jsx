import React from 'react';
import { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [favPhotos, setFavPhotos] = useState({});
  // show if fav:
  const addFavPhoto = (photo) => {
    setFavPhotos((prev) => ({ ...prev, [photo.id]: { photo } }));
  };
  //don't if not
  const delFavPhoto = (photo) => {
    setFavPhotos((prev) => {
      const { [photo.id]: removed, ...remain } = prev;
      return remain;
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={Object.keys(favPhotos).length > 0} />
      <PhotoList addFavPhoto={addFavPhoto} delFavPhoto={delFavPhoto}/>
    </div>
  );
};

export default HomeRoute;
