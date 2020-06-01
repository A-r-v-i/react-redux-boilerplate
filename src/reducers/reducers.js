import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Snehithane Snehithane", duration: "6:04" },
    { title: "Malargal ketten, Marame Thanthanai", duration: "5:57" },
    { title: "Enge enathu kavithai", duration: "5:38" },
    { title: "Kadhal Sadugudu gudu", duration: "4:58" },
  ];
};

const selectedSongReducer = (_selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;

    default:
      return _selectedSong;
  }
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
