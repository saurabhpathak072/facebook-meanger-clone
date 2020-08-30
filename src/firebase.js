import firebase from 'firebase';

const firebaseAPP =firebase.initializeApp({
    apiKey: "AIzaSyASLyH6QVpx-4goAhTWk02hMGwLWJ5iYss",
  authDomain: "facebook-mesanger-clone.firebaseapp.com",
  databaseURL: "https://facebook-mesanger-clone.firebaseio.com",
  projectId: "facebook-mesanger-clone",
  storageBucket: "facebook-mesanger-clone.appspot.com",
  messagingSenderId: "242591088114",
  appId: "1:242591088114:web:b4ea3a23a2f4f64f84bf6b",
  measurementId: "G-7VJB382JTE"
});

const db = firebaseAPP.firestore();

export default db;