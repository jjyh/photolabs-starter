import { useReducer, useEffect } from "react";
import photos from "../mocks/photos";
import topics from "../mocks/topics";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  GET_PHOTOS_BY_TOPICS:"GET_PHOTOS_BY_TOPICS"
};

const reducer = (state, action) => {
  switch (action.type) {
    // if photo is not in favPhoto, include
    case "FAV_PHOTO_ADDED":
    if (!state.favPhotos.includes(action.payload)) {
      return { ...state, favPhotos: [...state.favPhotos, action.payload] };
    }
    return state;

    case "FAV_PHOTO_REMOVED":
      const index = state.favPhotos.indexOf(action.payload);
      if (index >= 0) {
        return { ...state, favPhotos: state.favPhotos.splice(index, 1) };
      }
   return state;

  case "SET_PHOTO_DATA":
    return { ...state, photoData: action.payload };

  case "SET_TOPIC_DATA":
    return { ...state, topicData: action.payload };
  
  case "SELECT_PHOTO":
    if (action.payload) {
      return { ...state, modalPhoto: action.payload };
    }
      return { ...state, modalPhoto: null };

  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favPhotos: [],
    modalPhoto: null,
    photoData: [],
    topicData: topics
  });

  useEffect(() => {
    // fetch("http://localhost:8001/api/photos").then((res)=>{console.log(res);})
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  // //   fetch("/api/topics")
  //     .then((res) => res.json())
  //     .then((data) =>
  //       dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
  //     );
    }, 
  []);

  // const fetchPhotosByTopic = (topicID) => {
  //   fetch(`api/topics/photos/${topicID}`)
  //     .then((res) => res.json())
  //     .then((photos) =>
  //       dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: photos })
  //     );
  // };

  return {
    state,
    dispatch,
    // fetchPhotosByTopic
  };
};

export default useApplicationData;