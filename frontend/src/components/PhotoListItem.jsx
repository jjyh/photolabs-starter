import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  return (
    <article className='photo-list'>
      <img src={sampleDataForPhotoListItem.imageSource}></img>
      <img src = {sampleDataForPhotoListItem.profile}></img>
      <div>
        <span>{sampleDataForPhotoListItem.username}</span>
        <br />
        <span>
          {sampleDataForPhotoListItem.location.city}
          {" "}
          {sampleDataForPhotoListItem.location.country}
        </span>
      </div>
    </article>
  );
};

export default PhotoListItem;
