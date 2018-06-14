import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyCsVclbqmFg7b85ZeoY-cpXNq8xwTRFPBQ",
	authDomain: "carddeck-e4792.firebaseapp.com",
	databaseURL: "https://carddeck-e4792.firebaseio.com",
	projectId: "carddeck-e4792",
	storageBucket: "carddeck-e4792.appspot.com",
	messagingSenderId: "467549421963"
};

var fire = firebase.initializeApp(config);
export default fire;