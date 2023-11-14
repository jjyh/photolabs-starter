import React,  { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  //console.log(photo);
  const {photo, favPhotos, addFavPhoto, delFavPhoto, onClosePhotoDetailsModal } = props;
  const {
    id,
    location: { city, country },
    urls: { full },
    user: { name, profile },
    similar_photos
  } = photo;

  const handleFavButtonClick = (photoId) => {
    return favPhotos.includes(photoId)
      ? delFavPhoto(photoId)
      : addFavPhoto(photoId);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
        onClick={onClosePhotoDetailsModal}
      >
      <img src={closeSymbol} alt="close symbol" />
      </button>

{/*zoom in photo*/}
      <section className="photo-details-modal__images">
        <PhotoFavButton 
          handleFavButtonClick={() => handleFavButtonClick(id)}
          selected={!!favPhotos.includes(id)}
        />
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
        <PhotoList 
          photos={Object.values(similar_photos)}
          favPhotos={favPhotos}
          addFavPhoto={addFavPhoto}
          delFavPhoto={delFavPhoto}
        />
      </section>

    </div>
  )
};

export default PhotoDetailsModal;