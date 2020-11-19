import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDADCtZHUW-nzkWj2EhXhmqKHEwQ-rzsvw',
  authDomain: 'crwn-db-a88e4.firebaseapp.com',
  databaseURL: 'https://crwn-db-a88e4.firebaseio.com',
  projectId: 'crwn-db-a88e4',
  storageBucket: 'crwn-db-a88e4.appspot.com',
  messagingSenderId: '725117100376',
  appId: '1:725117100376:web:7ca02f1724072edea3852d',
  measurementId: 'G-GGZ2M339J7',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
