// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
.initializeApp({ 
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "" 
})
.database()