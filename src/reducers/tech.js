import {GET_TECH_ITEMS} from "../actions/types";

const INITIAL_STATE = {
  techItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TECH_ITEMS:
      return {
        ...state,
        techItems: action.payload
      };

    default:
      return state;
  }
};
