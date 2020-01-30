export const selectSong = (song = null) => {
  // MUST have a type property!
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
