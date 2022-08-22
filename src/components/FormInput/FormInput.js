import './FormInput.scss';

const FormInput = ({ label, inputOptions }) => {
	return (
		<div className='form-group'>
			<input className='form-input' type='text' {...inputOptions} />
			{label && (
				<label
					className={`${
						inputOptions.value.length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;