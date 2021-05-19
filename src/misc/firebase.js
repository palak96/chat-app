/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBW9KmcMAwI8Jkqj-qN80TYntlT7vkMO3A',
  authDomain: 'chat-web-app-c0531.firebaseapp.com',
  projectId: 'chat-web-app-c0531',
  storageBucket: 'chat-web-app-c0531.appspot.com',
  messagingSenderId: '618664284168',
  appId: '1:618664284168:web:40c820e2257fb6c95f81bd',
  databaseURL: 'https://chat-web-app-c0531-default-rtdb.firebaseio.com/',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
