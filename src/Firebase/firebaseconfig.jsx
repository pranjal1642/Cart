// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: 'AIzaSyBUOQhM1qIMkRFxyvCMBRmQUhmnclx-KC4',
	authDomain: 'task-966fe.firebaseapp.com',
	projectId: 'task-966fe',
	storageBucket: 'task-966fe.appspot.com',
	messagingSenderId: '274475563381',
	appId: '1:274475563381:web:342092b88e7ff9752a3b3c',
	measurementId: 'G-5YT33S9YPT',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();

const analytics = getAnalytics(app);
