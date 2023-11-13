import React from 'react';
import { useState } from 'react';

//import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from "components/TopicList";
import TopNavigationBar from "components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

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
//   return (
//     <div className="App">
//       <PhotoListItem sampleDataForPhotoListItem = {sampleDataForPhotoListItem}/>
//     </div>
//   );
// };

  // const photos = new Array(3).fill(
  //   <PhotoListItem
  //     key={sampleDataForPhotoListItem.id}
  //     sampleDataForPhotoListItem={sampleDataForPhotoListItem}
  //   />
  // );

// return <div className="App">{photos}</div>;

// <PhotoList />
//<TopicList />
//<TopNavigationBar />
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

  return(
    <div className="App">
      <HomeRoute 
        setModal={setModalPhoto}
        favPhotos={favPhotos}
        handleFavButtonClick={handleFavButtonClick}
      />
      {modalPhoto && (
        <PhotoDetailsModal 
        photo={modalPhoto} 
        setModal={setModalPhoto}
        favPhotos={favPhotos}
        handleFavButtonClick={handleFavButtonClick} />
      )}
    </div>
  );
};

export default App;
