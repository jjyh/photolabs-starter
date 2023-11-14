import { useReducer  } from "react";

function reducer(state, action) {
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
    photoData: null,
    topicData: null,
  });

  return {
    state,
    dispatch
  };
};

export default useApplicationData;