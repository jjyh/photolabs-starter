import { useState } from "react";
const useApplicationData = () => {

  const [modalPhoto, setModalPhoto] = useState(null); // modal w/ photo key shows photo
  const [favPhotos, setFavPhotos] = useState([]);
  // show if fav:
  const addFavPhoto = (photoID) => {
    setFavPhotos((prev) => {
      if (!prev.includes(photoID)) {
        return [...prev, photoID];
      }
    });
  };
  //don't if not
  const delFavPhoto = (photoID) => {
    setFavPhotos((prev) => {
      const index = prev.indexOf(photoID);
      return index >= 0 ? prev.splice(index, 1) : prev;
    });
  };

  const handleFavButtonClick = (photoID) => {
    // addFavPhoto (current photo) when clicked but not yet in favPhoto
    // if not, delete current photo from favorited
    favPhotos.includes(photoID)
      ? delFavPhoto(photoID)
      : addFavPhoto(photoID);
  };

  const onClosePhotoDetailsModal = () => {
    setModalPhoto(null);
  };

  return {
    state: { modalPhoto, favPhotos },
    setModalPhoto,
    handleFavButtonClick,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;