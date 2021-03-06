import { ADD_PLACE, SET_PLACES } from "./Places_action";
import Place from "../models/Place";

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        places: action.places.map(pl =>
          Place(
            pl.id.toString(),
            pl.title,
            pl.imageUri,
            pl.address,
            pl.lat,
            Number(pl.lng)
          )
        )
      };
    case ADD_PLACE:
      const newPlace = Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image,
        action.placeData.address,
        action.placeData.coords.lat,
        action.placeData.coords.lng
      );
      return {
        places: state.places.concat(newPlace)
      };
    default:
      return state;
  }
};
