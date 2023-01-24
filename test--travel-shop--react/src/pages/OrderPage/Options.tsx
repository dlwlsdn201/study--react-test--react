import React from 'react';

const Options = ({ name }: { name: string }) => {
	return (
		<div style={{ marginBottom: '0.5em' }}>
			<form>
				<input type='checkbox' id={`${name} option`} />
				<label htmlFor={`${name} option`}>{name}</label>
			</form>
		</div>
	);
};

export default Options;
