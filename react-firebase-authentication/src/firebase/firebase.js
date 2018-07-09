import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


 	// apiKey: 'AIzaSyBQzwxV8_7CLKxbDCMiCSNXa-MEsiTUCR8',
  //   authDomain: 'ninemenmorris-3bbfa.firebaseapp.com',
  //   databaseURL: "https://ninemenmorris-3bbfa.firebaseio.com",
  //   projectId: "ninemenmorris-3bbfa",
  //   storageBucket: "ninemenmorris-3bbfa.appspot.com",
  //   messagingSenderId: "55811576007"

const prodConfig = {
	apiKey: "AIzaSyBQzwxV8_7CLKxbDCMiCSNXa-MEsiTUCR8",
    authDomain: "ninemenmorris-3bbfa.firebaseapp.com",
    databaseURL: "https://ninemenmorris-3bbfa.firebaseio.com",
    projectId: "ninemenmorris-3bbfa",
    storageBucket: "ninemenmorris-3bbfa.appspot.com",
    messagingSenderId: "55811576007"
};

const devConfig = {
	apiKey: "AIzaSyBQzwxV8_7CLKxbDCMiCSNXa-MEsiTUCR8",
    authDomain: "ninemenmorris-3bbfa.firebaseapp.com",
    databaseURL: "https://ninemenmorris-3bbfa.firebaseio.com",
    projectId: "ninemenmorris-3bbfa",
    storageBucket: "ninemenmorris-3bbfa.appspot.com",
    messagingSenderId: "55811576007"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
