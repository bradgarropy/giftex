import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
}

let app
let auth
let firestore

if (typeof window !== "undefined") {
    app = firebase.initializeApp(config)
    auth = firebase.auth()
    firestore = firebase.firestore()
}

export {firebase, app, auth, firestore}
