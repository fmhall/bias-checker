// TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
// Initialize Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyARisDaUpCv3QpAlve0arKpU69d1a0SSy4",
    authDomain: "bias-checker.firebaseapp.com",
    databaseURL: "https://bias-checker.firebaseio.com",
    projectId: "bias-checker",
    storageBucket: "bias-checker.appspot.com",
    messagingSenderId: "698794989569"
};

firebase.initializeApp(config);
var database = firebase.database();
console.log("hello");
  /**
   * initApp handles setting up the Firebase context and registering
   * callbacks for the auth status.
   *
   * The core initialization is in firebase.App - this is the glue class
   * which stores configuration. We provide an app name here to allow
   * distinguishing multiple app instances.
   *
   * This method also registers a listener with firebase.auth().onAuthStateChanged.
   * This listener is called when the user is signed in or out, and that
   * is where we update the UI.
   *
   * When signed in, we also authenticate to the Firebase Realtime Database.
   */
//   function initApp() {
    // Listen for auth state changes.
//     firebase.auth().onAuthStateChanged(function(user) {
//       console.log('User state change detected from the Background script of the Chrome Extension:', user);
//     });
//   }
  
//   window.onload = function() {
//     initApp();
  ;