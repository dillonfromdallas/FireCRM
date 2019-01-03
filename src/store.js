import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyALBBSRzTBGE_CEw90gScGAKc9YWGx0v-w",
  authDomain: "firecrm-fe1f1.firebaseapp.com",
  databaseURL: "https://firecrm-fe1f1.firebaseio.com",
  projectId: "firecrm-fe1f1",
  storageBucket: "firecrm-fe1f1.appspot.com",
  messagingSenderId: "369275303912"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  userFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
