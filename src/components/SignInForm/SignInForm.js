import { useState } from 'react';
import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss';

const initialFormFields = {
	email: '',
	password: '',
};
const SignInForm = () => {
	const [formFields, setFormFields] = useState(initialFormFields);
	const { email, password } = formFields;

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const resetFormFields = () => {
		setFormFields(initialFormFields);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(user);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					inputOptions={{
						type: 'email',
						required: true,
						onChange: handleChange,
						name: 'email',
						value: email,
					}}
				/>

				<FormInput
					label='Password'
					inputOptions={{
						type: 'password',
						required: true,
						onChange: handleChange,
						name: 'password',
						value: password,
					}}
				/>
				<div className='buttons-container'>
					<Button type='submit'>SIGN IN</Button>
					<Button type='button' buttonType='google' onClick={signInWithGoogle}>
						SIGN IN WITH GOOGLE
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
