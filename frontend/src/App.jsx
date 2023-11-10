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
  const [modal, setModal] = useState({ isOpen: false });
  return(
    <div className="App">
      <HomeRoute setModal={setModal} />
      {modal.isOpen && (
        <PhotoDetailsModal photo={modal.photo} setModal={setModal} />
      )}
    </div>
  );
};

export default App;
