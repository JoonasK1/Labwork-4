import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const config = {
    apiKey: "AIzaSyCrPiIZ3DSb65O-3ZTk0ZNblgr8JFIi2TI",
    authDomain: "labwork-4-7b40b.firebaseapp.com",
    projectId: "labwork-4-7b40b",
    storageBucket: "labwork-4-7b40b.appspot.com",
    messagingSenderId: "44609337074",
    appId: "1:44609337074:web:a7abdb38e38facd0a3c26b"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
    const email = `${username}@gmail.com`
    try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)

    console.log(res)
    return res
    } catch(error) {
        console.log(error)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@gmail.com`
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch(error) {
        console.log(error)
        return false
    }
    
}
