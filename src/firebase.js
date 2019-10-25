import { initializeApp } from 'firebase';
const app = initializeApp({
    apiKey: "AIzaSyAtjefEKk7uzmbzbOJA4BpHTR3_JuTz3LE",
    authDomain: "fuctions-with-socket-io.firebaseapp.com",
    databaseURL: "https://fuctions-with-socket-io.firebaseio.com",
    projectId: "fuctions-with-socket-io",
    storageBucket: "fuctions-with-socket-io.appspot.com",
    messagingSenderId: "313547861611",
    appId: "1:313547861611:web:2334b16f500c3da2e98b2e",
    measurementId: "G-R6ZH8CZDX5"
});

export const db = app.database();
export const todosCollection = db.collection('todos');