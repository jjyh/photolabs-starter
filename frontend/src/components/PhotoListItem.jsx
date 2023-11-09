import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    location: { city, country },
    user: { name, profile },
    urls: { regular },
  } = props;

  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img src={regular} className="photo-list__image" />
      <footer className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{name}</span>
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