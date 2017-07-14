import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBd3d6fX_njsuR8Loi7jVv5gim8DEYlrog",
  authDomain: "messengerapp-17206.firebaseapp.com",
  databaseURL: "https://messengerapp-17206.firebaseio.com",
  projectId: "messengerapp-17206",
  storageBucket: "messengerapp-17206.appspot.com",
  messagingSenderId: "678846062498"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
