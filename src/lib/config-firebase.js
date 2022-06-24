import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0e0U3DOhpc7HHfHgpaNthM8nWwtd8JtE",
  authDomain: "notesaggre.firebaseapp.com",
  projectId: "notesaggre",
  storageBucket: "notesaggre.appspot.com",
  messagingSenderId: "391049135376",
  appId: "1:391049135376:web:95440f827825716ec01195"
};

const app = initializeApp(firebaseConfig);
console.log(app);
