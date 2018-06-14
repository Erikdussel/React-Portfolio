import * as firebase from 'firebase';


export default class Storage {
	static displayFirebaseStorageImage(ref: string, callback: (url: string) => void) {
		const imageRef = firebase.storage().ref(ref);
		imageRef.getDownloadURL().then((url: string) => callback(url));
	}
}