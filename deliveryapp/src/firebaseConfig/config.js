import firebase from "firebase-tools"

const config = {
  apiKey: "AIzaSyB2-Xss6eRsvY7IVTWxoO-0hGKnFSBgqL0",
  authDomain: "campusmart-dc082.firebaseapp.com",
  databaseURL: "https://campusmart-dc082.firebaseio.com",
  projectId: "campusmart-dc082",
  storageBucket: "campusmart-dc082.appspot.com",
  messagingSenderId: "319368596295",
  appId: "1:319368596295:web:971fc15bdd8f405a01da62",
  measurementId: "G-RZ5CQMS077",
};
const firebaseConfig = firebase.initializeApp(config)
export default firebaseConfig;
