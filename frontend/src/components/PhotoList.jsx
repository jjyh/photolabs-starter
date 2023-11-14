import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favPhotos, ...otherProps } = props;
  const photosElem = 
    Array.isArray(photos) &&
    photos.map((photo) => (
      <PhotoListItem 
        key={photo.id} 
        photo={photo}
        isFav={!!favPhotos.includes(photo.id)}
        {...otherProps} />
    ));
    return (
      <ul className="photo-list">{photosElem}</ul>
  );
};

export default PhotoList;