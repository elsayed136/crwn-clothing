import { useState } from 'react';
import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { ButtonsContainer, SignInContainer } from './SignInForm.styles';

const initialFormFields = {
	email: '',
	password: '',
};
const SignInForm = () => {
	const [formFields, setFormFields] = useState(initialFormFields);
	const { email, password } = formFields;

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const resetFormFields = () => {
		setFormFields(initialFormFields);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);
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
		<SignInContainer>
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
				<ButtonsContainer>
					<Button type='submit'>SIGN IN</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						SIGN IN WITH GOOGLE
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
