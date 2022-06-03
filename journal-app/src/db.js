import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth'


const appConfig ={
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
}

firebase.initializeApp(appConfig)

const app = initializeApp(appConfig);

const db = getFirestore(app);

export default db;
