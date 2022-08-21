import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAO8G5nXtUL4CLpIJUFw3p8Wgrtm2SCXoQ',
	authDomain: 'crwn-clothing-db-fc3bd.firebaseapp.com',
	projectId: 'crwn-clothing-db-fc3bd',
	storageBucket: 'crwn-clothing-db-fc3bd.appspot.com',
	messagingSenderId: '14083692582',
	appId: '1:14083692582:web:928c414a563abd5f4aaee7',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

const auth = getAuth();

const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

const createUserDocumentFromAuth = async userAuth => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;
};

export { auth, signInWithGooglePopup, db, createUserDocumentFromAuth };
