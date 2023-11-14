import React from 'react';

import './App.scss';
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from './hooks/useApplicationData';
import photos from "./mocks/photos";

const App = () => {
  const {
    state: { favPhotos, modalPhoto },
    dispatch
  } = useApplicationData();

  return(
    <div className="App">
      <HomeRoute 
        photos={photos}
        setModalPhoto={(photo) =>
          dispatch({ type: "SELECT_PHOTO", payload: photo })
        }
        favPhotos={favPhotos}
        addFavPhoto={(photoID) =>
          dispatch({ type: "FAV_PHOTO_ADDED", payload: photoID })
        }
        delFavPhoto={(photoID) =>
          dispatch({ type: "FAV_PHOTO_REMOVED", payload: photoID })
        }
      />
      {modalPhoto && (
        <PhotoDetailsModal 
        photo={modalPhoto} 
        onClosePhotoDetailsModal={() => dispatch({ type: "SELECT_PHOTO" })}
        favPhotos={favPhotos}
        addFavPhoto={(photoID) =>
          dispatch({ type: "FAV_PHOTO_ADDED", payload: photoID })
        }
        delFavPhoto={(photoID) =>
          dispatch({ type: "FAV_PHOTO_REMOVED", payload: photoID })
        }
         />
      )}
    </div>
  );
};

export default App;
