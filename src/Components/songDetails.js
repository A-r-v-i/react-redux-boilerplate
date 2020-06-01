import React from "react";
import { connect } from "react-redux";

function songDetails(props) {
  const { song } = props;
  console.log(song);
  return (
    <div className="ui placeholder segment">
      <div className="ui icon header">
        <i className="music icon"></i>
        {song ? <p>{song.title}</p> : <p>Select a song to get details.</p>}
      </div>
      {song ? (
        <div className="ui primary button">
        <p>{song.duration}</p>
        </div>
      ) : (
        <div className="ui primary button">Play</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(songDetails);
