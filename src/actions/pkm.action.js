import axios from "axios";

export const GET_ALL_PKM = "GET_ALL_PKM";

export const getAllPkm = () => {
  return (dispatch) => {
    return axios
      .get("https://pokeapi.co/api/v2/pokemon-form/?limit=151")
      .then((res) => {
        dispatch({ type: GET_ALL_PKM, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
