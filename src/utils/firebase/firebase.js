import { initializeApp } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	writeBatch,
} from 'firebase/firestore';

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

const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach(object => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
};

const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);

	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return categoryMap;
};

const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;

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
				...additionalInformation,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;
};

const creatAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = async () => await signOut(auth);

const onAuthStateChangedListener = callback =>
	onAuthStateChanged(auth, callback);

export {
	auth,
	signInWithGooglePopup,
	db,
	createUserDocumentFromAuth,
	creatAuthUserWithEmailAndPassword,
	signInAuthUserWithEmailAndPassword,
	signOutUser,
	onAuthStateChangedListener,
	addCollectionAndDocuments,
	getCategoriesAndDocuments,
};
