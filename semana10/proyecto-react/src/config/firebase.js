import firebase from "firebase"
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
apiKey: "AIzaSyA5Pel8CKFL7-cHoo181fhvAJ0FvGcAEms",
authDomain: "codigo-frontend.firebaseapp.com",
projectId: "codigo-frontend",
storageBucket: "codigo-frontend.appspot.com",
messagingSenderId: "681853518479",
appId: "1:681853518479:web:f51ad7ed1b18bb1963e6fa",

};
// Inicializando Firebase
const fire = firebase.initializeApp(firebaseConfig)
export {
  firebase, //trae metodos tipos de datos
  fire //Nos va a permitir hacer operaciones utilizando Firebase
}