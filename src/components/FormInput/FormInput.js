import { FormInputLabel, Group, Input } from './FormInput.styles';

const FormInput = ({ label, inputOptions }) => {
	return (
		<Group>
			<Input type='text' {...inputOptions} />
			{label && (
				<FormInputLabel shrink={inputOptions.value.length}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
