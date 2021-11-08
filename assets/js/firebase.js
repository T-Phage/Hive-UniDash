var app_fireBase = {};

(function () {

    var config = {
        apiKey: "AIzaSyBXgpEnl1R0PiJzxrjXfHcbNHStmyHmOg0",
        authDomain: "mail-subscriptions-fb900.firebaseapp.com",
        databaseURL: "https://mail-subscriptions-fb900.firebaseio.com",
        projectId: "mail-subscriptions-fb900",
        storageBucket: "mail-subscriptions-fb900.appspot.com",
        messagingSenderId: "946741562798",
        appId: "1:946741562798:web:3bdbf982cb641462988c3f",
        measurementId: "G-Y8SP994S5S"
    };

    firebase.initializeApp(config);

    app_fireBase = firebase;

})();

const fetchHouse = firebase.firestore();
//fetchHouse.settings({ timestampsInSnapshots: true });  -  deprecated, firestore finally fixed the crap outta this issue.