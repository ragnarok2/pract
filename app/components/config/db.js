import firebase from 'firebase'

let configdb = {
    apiKey: "AIzaSyBSkGEQ-rKjtMYPJZb_B4RkS6Vrk8LII1k",
    authDomain: "test-fc72a.firebaseapp.com",
    databaseURL: "https://test-fc72a.firebaseio.com",
    projectId: "test-fc72a",
    storageBucket: "test-fc72a.appspot.com",
    messagingSenderId: "798929395909"
}
let appConfig = firebase.initializeApp(configdb)

export const db = appConfig.database()

