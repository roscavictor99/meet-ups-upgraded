import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA67hw1b6mU-Odj6HvHaw7KhjqcfaEdUO4',
  authDomain: 'my-project-807df.firebaseapp.com',
  databaseURL: 'https://my-project-807df-default-rtdb.firebaseio.com',
  projectId: 'my-project-807df',
  storageBucket: 'my-project-807df.appspot.com',
  messagingSenderId: '371187462694',
  appId: '1:371187462694:web:ee07be2485b41d0c6c6ce7',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
