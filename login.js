import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCO8cEi7jTlBHyOUmSfMyjGChsYDTzC-hs",
    authDomain: "faiznew-fe274.firebaseapp.com",
    projectId: "faiznew-fe274",
    storageBucket: "faiznew-fe274.appspot.com",
    messagingSenderId: "759607772423",
    appId: "1:759607772423:web:e22ad09c837f96e9c5b1a2",
    measurementId: "G-ZQ72ECR0MJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const loader = document.getElementById('loader')

const loginbtn= document.getElementById('LOG')

loginbtn.addEventListener('click',function(){

    let email= document.getElementById('log_email').value
    let password= document.getElementById('log_password').value

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = "index.html";


    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  })


})

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        loader.style.display = 'none'
        // content_container.style.display = 'block'
        // login_container.style.display = 'none'
        // ...
    } else {
        // User is signed out
        console.log('user mojood nahn he',)
        loader.style.display = 'none'
        // login_container.style.display = 'block'
        // content_container.style.display = 'none'
        // ...
    }
});