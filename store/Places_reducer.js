import { ADD_PLACE } from "./Places_action";
import Place from "../models/Place";

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = Place(
        new Date().toString(),
        action.placeData.title,
        action.placeData.image
      );
      return {
        places: state.places.concat(newPlace)
      };
    default:
      return state;
  }
};
