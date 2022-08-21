import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = createUserDocumentFromAuth(user);
	};
	return (
		<div>
			<h1>SignIn page</h1>
			<button onClick={logGoogleUser}>SignIn with Google Popup</button>
		</div>
	);
};

export default SignIn;
