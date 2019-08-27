import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  public sent: boolean;
  public phone_number:string;
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBJPImmg65NwSBLAOasTR9aTH8N016Px74",
      authDomain: "onlinebankapp.firebaseapp.com",
      databaseURL: "https://onlinebankapp.firebaseio.com",
      projectId: "onlinebankapp",
      storageBucket: "",
      messagingSenderId: "183806106964",
      appId: "1:183806106964:web:94e9db68d5be0f4d"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
   }
 
   ngOnInit() {
  //  this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    
   console.log(response);
   this.onSubmit();
  }
});
   }
 
  onSubmit() {
    const appVerifier = this.recaptchaVerifier;
    console.log(this.phone_number);
    const phoneNumber = "+91"+this.phone_number;
    console.log(phoneNumber);
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        this.sent = true;
        const verification = prompt('Enter verification code');
        if (verification != null) {
          console.log(verification);
          confirmationResult.confirm(verification)
            .then((good) => {
              // all checks out
              console.log('verification successful', good);

            })
            .catch((bad) => {
              // code verification was bad.
            });
        } else {
          console.log('No verification code entered');
        }
      })
      .catch((err) => {
        console.log('sms not sent', err);
      });
  };

}
