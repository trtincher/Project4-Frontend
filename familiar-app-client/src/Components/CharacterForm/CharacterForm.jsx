import React from 'react';
import { Link } from 'react-router-dom';

function StudentForm({ type, subject, handleSubmit, handleChange, cancelPath }) {
	console.log('StudentForm type', type);

	return (
		<div className="StudentForm">
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

export default StudentForm;
