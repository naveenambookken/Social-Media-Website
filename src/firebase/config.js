import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const app = firebase.initializeApp({
  apiKey: "AIzaSyBaRiwMhCD-HCKLhOm3XBPJ8RH1wPB0lNM",
  authDomain: "signup-login-testapp.firebaseapp.com",
  projectId: "signup-login-testapp",
  storageBucket: "signup-login-testapp.appspot.com",
  messagingSenderId: "753444219789",
  appId: "1:753444219789:web:09b3aa927e9f70fee5abc4"  
});

  export const auth = app.auth()
  export default app
  
  