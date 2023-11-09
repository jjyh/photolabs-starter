import React from "react";
import { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const [selected, setSelected] = useState(false);
  const {
    photo: {
      location: { city, country },
      urls: { regular },
      user: { name, profile },
    },
    addFavPhoto,
    delFavPhoto
  } = props;

  const handleFavButtonClick = (photoObj) => {
    // addFavPhoto (current photo) when clicked but not prev. selected
    // if not, delete current photo from favorited
    selected ? delFavPhoto(photoObj) : addFavPhoto(photoObj);

    // Change the favButton
    setSelected(!selected);
  };
  return (
    <article className="photo-list__item">
      <PhotoFavButton handleFavButtonClick={() => handleFavButtonClick(props.photo)}
        selected={selected}/>
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