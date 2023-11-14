import React from 'react';

import './App.scss';

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData, { ACTIONS } from "./hooks/useApplicationData";

const App = () => {
  const {
    state: { favPhotos, modalPhoto, photoData, topicData },
    dispatch,
    fetchPhotosByTopic
  } = useApplicationData();

  return(
    <div className="App">
      <HomeRoute 
        photos={photoData}
        topics={topicData}
        setModalPhoto={(photo) =>
          dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo })
        }
        favPhotos={favPhotos}
        addFavPhoto={(photoID) =>
          dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoID })
        }
        delFavPhoto={(photoID) =>
          dispatch({ type:  ACTIONS.FAV_PHOTO_REMOVED, payload: photoID })
        }
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {modalPhoto && (
        <PhotoDetailsModal 
          photo={modalPhoto} 
          onClosePhotoDetailsModal={() =>
            dispatch({ type: ACTIONS.SELECT_PHOTO })
          }
          favPhotos={favPhotos}
          addFavPhoto={(photoID) =>
            dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoID })
          }
          delFavPhoto={(photoID) =>
            dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoID })
          }
        />
      )}
    </div>
  );
};

export default App;