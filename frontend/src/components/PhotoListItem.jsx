import React from "react";
import { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  //const [selected, setSelected] = useState(false);
  const { photo, isFav, setModal, handleFavButtonClick } = props;
  const { 
    id,
    location: { city, country },
    urls: { regular },
    user: { name, profile },
  } = photo;

  return (
    <article className="photo-list__item">
      <PhotoFavButton handleFavButtonClick={handleFavButtonClick}
        selected={isFav}
      />
      <img src={regular} className="photo-list__image" onClick={() => setModal(photo)}/>
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