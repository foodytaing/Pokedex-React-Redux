import { GET_ALL_PKM } from "../actions/pkm.action";

const initialState = {};

export default function pkmReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PKM:
      return action.payload;
    default:
      return state;
  }
}
