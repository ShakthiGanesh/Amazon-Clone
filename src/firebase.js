import firebase from 'firebase'
require('dotenv').config()

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "clone-636d0.firebaseapp.com",
  databaseURL: "https://clone-636d0.firebaseio.com",
  projectId: "clone-636d0",
  storageBucket: "clone-636d0.appspot.com",
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }