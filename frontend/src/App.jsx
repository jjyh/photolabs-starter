import React from 'react';
import { useState } from 'react';

//import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from "components/TopicList";
import TopNavigationBar from "components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from './hooks/useApplicationData';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { favPhotos, modalPhoto },
    setModalPhoto,
    onClosePhotoDetailsModal,
    handleFavButtonClick,
  } = useApplicationData();

  return(
    <div className="App">
      <HomeRoute 
        setModalPhoto={setModalPhoto}
        favPhotos={favPhotos}
        handleFavButtonClick={handleFavButtonClick}
      />
      {modalPhoto && (
        <PhotoDetailsModal 
        photo={modalPhoto} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        favPhotos={favPhotos}
        handleFavButtonClick={handleFavButtonClick} />
      )}
    </div>
  );
};

export default App;
