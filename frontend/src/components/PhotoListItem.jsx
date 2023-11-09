import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const photos = new Array(3)

const PhotoListItem = (props) => {
  
  const {
    location: { city, country },
    imageSource,
    username,
    profile,
  } = props.sampleDataForPhotoListItem;

  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} className="photo-list__image" />
      <footer className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <br />
          <span className="photo-list__user-location">
            {" "}
            {`${city}, ${country}`}
          </span>
        </div>
      </footer>
    </article>
  );
};


export default PhotoListItem;
