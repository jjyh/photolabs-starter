import React,  { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ photo, setModal }) => {
  //console.log(photo);
  const {
    location: { city, country },
    urls: { full },
    user: { name, profile },
    similar_photos
  } = photo;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
        onClick={() => setModal({ isOpen: false })}
      >
      <img src={closeSymbol} alt="close symbol" />
      </button>

{/*zoom in photo*/}
      <section className="photo-details-modal__images">
        <PhotoFavButton />
        <img src={full} className="photo-details-modal__image" />

        <footer className="photo-details-modal__photographer-details">
          <img
            src={profile}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <span>{name}</span>
            <br />
            <span
              className="photo-details-modal__photographer-location {
                "
            >
              {`${city}, ${country}`}
            </span>
          </div>
        </footer>
      </section>
      {/* Section of similar photos */}
      <section className="photo-details-modal__images">
        <h2 className="photo-details-modal__header">Similar Photo</h2>
        <PhotoList photos={Object.values(similar_photos)} />
      </section>

    </div>
  )
};

export default PhotoDetailsModal;
