import {} from "../actions/types";

const INITIAL_STATE = {
  techItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state
      };

    default:
      return state;
  }
};
