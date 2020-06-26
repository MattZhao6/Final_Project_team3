import { v4 as uuidv4 } from "uuid";
import { INIT } from "./actionTypes";
const initialstate = {
  list: {
    id: uuidv4(),
    title: "", //movie name
    title_order: "ASC", //or "DES"
    rate_count: "",
    rate_order: "ASC", //or "DES"
    vote_avg: "",
    vote_order: "ASC", //or "DES"
    release_date: "",
    date_order: "ASC", //or "DES"
    picture: "", //url
    like: "", //-1, 0, 1
    content: "" //movie description
  },
  movielist: []
};
const reducer = (state = initialstate, action) => {
  const newState = { ...state };
  //0:title, 1:rate-count, 2:vote-avg, 3:release_date, 4:picture, 5:content,
  if (action.type === INIT) {
    for (let i = 0; i < action.movielist.length; i++) {
      newState.list.title = action.movielist[i][0];
      newState.list.rate_count = action.movielist[i][1];
      newState.list.vote_avg = action.movielist[i][2];
      newState.list.release_date = action.movielist[i][3];
      newState.list.picture = action.movielist[i][4];
      newState.list.content = action.movielist[i][5];
      newState.movielist.push(newState.list);
    }
    console.log(newState.list);
    console.log(action.movielist[0][0]);
  }

  return newState;
};

export default reducer;
