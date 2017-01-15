import firebase from 'firebase/app';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyBhQTKWSGBut_C8DcyBxfSRQfdhUSwiXoA',
    authDomain: 'graphql-demo-90e3b.firebaseapp.com',
    databaseURL: 'https://graphql-demo-90e3b.firebaseio.com',
    storageBucket: 'graphql-demo-90e3b.appspot.com',
    messagingSenderId: '245816159988',
};

firebase.initializeApp(config);

export default function () {
    return true;
}
