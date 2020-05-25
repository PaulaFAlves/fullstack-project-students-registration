import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
apiKey: "AIzaSyCeguRfOsaPzqmDzlMVln7ZBlFkVylR8cY",
authDomain: "students-db-3635c.firebaseapp.com",
databaseURL: "https://students-db-3635c.firebaseio.com",
projectId: "students-db-3635c",
storageBucket: "students-db-3635c.appspot.com",
messagingSenderId: "691196227204",
appId: "1:691196227204:web:80576aef179043ea521cd1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;