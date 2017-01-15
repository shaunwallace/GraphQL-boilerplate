import firebase from 'firebase/app';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyCLOjuSbemQu8rau1pcobAXIsj2qxT8ptU',
    authDomain: 'graphql-demo.firebaseapp.com',
    databaseURL: 'https://graphql-demo.firebaseio.com',
    storageBucket: 'graphql-demo.appspot.com',
    messagingSenderId: '120344359586',
};

firebase.initializeApp(config);

export default function () {
    return true;
}
