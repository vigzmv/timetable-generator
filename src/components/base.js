import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCz1sOB93i4OFudhJdfVflL_bVy_fhZiLs',
  authDomain: 'time-table-generator-separate.firebaseapp.com',
  databaseURL: 'https://time-table-generator-separate.firebaseio.com',
});

export default Rebase.createClass(database(app));
