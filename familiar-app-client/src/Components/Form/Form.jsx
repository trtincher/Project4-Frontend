import React from 'react';
import { Link } from 'react-router-dom';

function Form({ type, subject, handleSubmit, handleChange, cancelPath }) {
	console.log('Form type', type);

	return (
		<div className="Form">
			<form onSubmit={handleSubmit}>
				<label>Text</label>
				<input placeholder={'Text here'} value={subject} name="field1" onChange={handleChange} />

				<label>Text</label>
				<input placeholder={`Text here`} value={subject} name="field2" onChange={handleChange} />

				<button type="submit">Submit</button>
				<Link to={cancelPath}>
					<button>Cancel</button>
				</Link>
			</form>
		</div>
	);
}

export default Form;
