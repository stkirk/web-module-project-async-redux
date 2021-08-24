import axios from "axios";

export const START_FETCHING_CREATURE = "START_FETCHING_CREATURE";
export const SUCCESS_FETCHING_CREATURE = "SUCCESS_FETCHING_CREATURE";
export const FAIL_FETCHING_CREATURE = "FAIL_FETCHING_CREATURE";

export const getCreature = () => (dispatch) => {
  dispatch({ type: START_FETCHING_CREATURE });

  axios
    .get("https://botw-compendium.herokuapp.com/api/v2/category/creatures")
    .then((res) => {
      console.log("API Response", res.data.data);
      dispatch({
        type: SUCCESS_FETCHING_CREATURE,
        payload: res.data.data.non_food,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({ type: FAIL_FETCHING_CREATURE, payload: err });
    });
};
