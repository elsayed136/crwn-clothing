import { useState } from 'react';
import {
	creatAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignUpForm.scss';

const initialFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(initialFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(initialFormFields);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('password does not match');
			return;
		}

		try {
			const { user } = await creatAuthUserWithEmailAndPassword(email, password);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			console.log(error.code);
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', error);
			}
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					inputOptions={{
						type: 'text',
						required: true,
						onChange: handleChange,
						name: 'displayName',
						value: displayName,
					}}
				/>

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

				<FormInput
					label='Confirm Password'
					inputOptions={{
						type: 'password',
						required: true,
						onChange: handleChange,
						name: 'confirmPassword',
						value: confirmPassword,
					}}
				/>

				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
