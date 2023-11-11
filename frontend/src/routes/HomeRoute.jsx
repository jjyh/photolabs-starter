import React from 'react';
import { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { favPhotos, addFavPhoto, delFavPhoto, setModal } = props;  

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={Object.keys(favPhotos).length > 0} />
      <PhotoList 
        favPhotos={favPhotos}
        addFavPhoto={addFavPhoto} 
        delFavPhoto={delFavPhoto} 
        setModal = {setModal}/>
    </div>
  );
};

export default HomeRoute;
