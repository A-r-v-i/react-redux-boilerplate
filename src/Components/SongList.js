import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

import "../css/songList.css";

class SongList extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedSong: null,
    };
  }

  renderList() {
    return this.props.songs.map((_song) => {
      return (
        <div
          className="item"
          key={_song.duration}
          onClick={() => {
            this.props.selectSong(_song);
          }}
        >
          <div className="left floated content">
            <button className="play_btn">
              <i className="play circle icon play_icon"></i>
            </button>
          </div>
          <div className="floated song_name">
            <div className="content song_title">{_song.title}</div>
            <div className="content song_duration right floated">
              {_song.duration}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui selection divided list songListContainer">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state);
  return {
    songs: state.songs,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSong: (_song)=> {dispatch(selectSong(_song))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
