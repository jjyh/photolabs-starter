import React from "react";
import PhotoListItem from "./PhotoListItem";
import photoData from "../mocks/photos";

import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const { photos, handleFavButtonClick, favPhotos, ...otherProps } = props;
  const photosElem = photos.map((photo) => (
    <PhotoListItem 
    key={photo.id} 
    photo={photo}
    handleFavButtonClick={() => handleFavButtonClick(photo.id)}
    isFav={!!favPhotos.includes(photo.id)}
    {...otherProps} />
  ));
  return (
    <ul className="photo-list">{photosElem}</ul>
  );
};

export default PhotoList;
