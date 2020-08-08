import "react-native-gesture-handler";
import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import PlacesReducer from "./store/Places_reducer";
import PlaceNavigation from "./navigation/PlaceNavigation";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch(err => {
    console.log("initializing db failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: PlacesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlaceNavigation />
    </Provider>
  );
}
