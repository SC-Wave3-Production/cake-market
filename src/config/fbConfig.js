import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBrKaNxMv2PlBwVnwKkRyl9V9pTfcDlDDE',
	authDomain: 'cakes-7a70e.firebaseapp.com',
	databaseURL: 'https://cakes-7a70e.firebaseio.com',
	projectId: 'cakes-7a70e',
	storageBucket: 'cakes-7a70e.appspot.com',
	messagingSenderId: '519557679033',
	appId: '1:519557679033:web:6e21c7f7a6d379a388d868',
	measurementId: 'G-7BJMXH3QX8',
};
const init = firebase.initializeApp(firebaseConfig);
const db = init.firestore();
export const storage = init.storage();

export default db;
