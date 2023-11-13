import React from 'react';
import { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import photosData from "../mocks/photos";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
//  const { favPhotos, addFavPhoto, delFavPhoto, setModal } = props;  

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={props.favPhotos.length > 0} />
      <PhotoList 
        photos={photosData}
        {...props}
        // favPhotos={favPhotos}
        // addFavPhoto={addFavPhoto} 
        // delFavPhoto={delFavPhoto} 
        // setModal = {setModal}
      />
    </div>
  );
};

export default HomeRoute;
