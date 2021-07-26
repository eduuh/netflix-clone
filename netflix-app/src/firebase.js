import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCbP9zY4u8uYaNohZmp-WSWOSM6c3x4cVQ',
  authDomain: 'netflix-clone-2d498.firebaseapp.com',
  projectId: 'netflix-clone-2d498',
  storageBucket: 'netflix-clone-2d498.appspot.com',
  messagingSenderId: '358457763579',
  appId: '1:358457763579:web:c5bc42c29e28f31ab4f25e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
