import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBsGTeuBGd2K5bXjJnHTt0Cj1jg2aGyV4k",
    authDomain: "disneyplus-clone-react-3a273.firebaseapp.com",
    projectId: "disneyplus-clone-react-3a273",
    storageBucket: "disneyplus-clone-react-3a273.appspot.com",
    messagingSenderId: "261255629346",
    appId: "1:261255629346:web:7bb96469bd04b4e74a187b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

