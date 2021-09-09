import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDqkddKFQoysZ76hdRQ6ErUf7KDlMZatPw",
  authDomain: "ball-runner-d7fbf.firebaseapp.com",
  databaseURL: "https://ball-runner-d7fbf-default-rtdb.firebaseio.com",
  projectId: "ball-runner-d7fbf",
  storageBucket: "ball-runner-d7fbf.appspot.com",
  messagingSenderId: "442167937712",
  appId: "1:442167937712:web:22486c98f2ee766bb50975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export default firebase.firestore();