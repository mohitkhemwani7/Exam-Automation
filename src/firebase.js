import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyA_7kvugvZ1jZxyVIPClB-jfNO_uepx3fU",
    authDomain: "exam-cell-automation.firebaseapp.com",
    databaseURL: "https://exam-cell-automation.firebaseio.com",
    projectId: "exam-cell-automation",
    storageBucket: "exam-cell-automation.appspot.com",
    messagingSenderId: "198262440804",
};
firebase.initializeApp(config);
export default firebase;