import React from "react";
import { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  //const [selected, setSelected] = useState(false);
  const {
    photo, favPhotos,
    addFavPhoto,
    delFavPhoto,
    setModal
  } = props;
  const { 
    id,
    location: { city, country },
    urls: { regular },
    user: { name, profile },
  } = photo;


  const handleFavButtonClick = (photoObj) => {
    // addFavPhoto (current photo) when clicked but not yet in favPhoto
    // if not, delete current photo from favorited
    favPhotos[id] ? delFavPhoto(photoObj) : addFavPhoto(photoObj);
  };
  return (
    <article className="photo-list__item">
      <PhotoFavButton handleFavButtonClick={() => handleFavButtonClick(props.photo)}
        selected={!favPhotos[id]}/>
      <img src={regular} className="photo-list__image" onClick={() => setModal({ isOpen: true, photo: props.photo })}/>
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