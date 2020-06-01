import React from 'react';
import NavBar from './navBar';
import SongList from './SongList';
import SongDetails from './songDetails';

const App = () => {
  return (
    <>
    <NavBar />
    <div className=" ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
    </>
  )
}

export default App;