import axios from "axios";
import { INIT } from "./actionTypes";

export const init = movielist => ({
  type: INIT,
  movielist
});

export const getlist = () => {
  const movielist = [];
  return dispatch => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=a1d1ff94c90b6204d361915f05abf298&language=en-US&page=1`
    ).then(res => {
      const data = res.data.results;
      //0:title, 1:rate-count, 2:vote-avg, 3:release_date, 4:picture, 5:content,
      for (let i = 0; i < data.length; i++) {
        const newlist = [];
        newlist.push(data[i].original_title);
        newlist.push(data[i].vote_count);
        newlist.push(data[i].vote_average);
        newlist.push(data[i].release_date);
        newlist.push(data[i].backdrop_path);
        newlist.push(data[i].overview);
        movielist.push(newlist);
      }
      // console.log(movielist);
      init(movielist);
    });
  };
};
