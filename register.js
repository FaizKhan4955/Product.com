import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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

let RegBtn=document.getElementById('REG')

RegBtn.addEventListener("click",function(){
    let email=document.getElementById('email').value
let password=document.getElementById('password').value
createUserWithEmailAndPassword(auth, email, password)
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
    // ..
  });

})

