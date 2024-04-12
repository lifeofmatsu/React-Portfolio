import React, { useState } from 'react';
import { isValidEmail } from '../utils/helpers';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [errors, setErrors] = useState({ email: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// validate email on change
		if (name === 'email') {
			if (!isValidEmail(value)) {
				setErrors({
					...errors,
					email: 'Please enter a valid email address.'
				});
			} else {
				setErrors({ ...errors, email: '' });
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// ensure all fields are filled
		if (!formData.name || !formData.email || !formData.message) {
			alert('Please fill out all fields.');
			return;
		}

		// further email validation upon submission if needed
		if (!isValidEmail(formData.email)) {
			alert('Please enter a valid email address.');
			return;
		}

		console.log('Form data submitted:', formData);
	};

	return (
		<section className='contact'>
			<h2>Contact</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					placeholder='Your Name'
					required
					onChange={handleChange}
				/>
				<input
					type='email'
					name='email'
					placeholder='Your Email'
					required
					onChange={handleChange}
				/>
				{errors.email && <div className='error'>{errors.email}</div>}
				<textarea
					name='message'
					placeholder='Your Message'
					required
					onChange={handleChange}
				></textarea>
				<button type='submit'>Send</button>
			</form>
		</section>
	);
};

export default Contact;
