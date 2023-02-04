import React, { ChangeEvent } from 'react';

const Options = ({
	name,
	updateItemCount
}: {
	name: string;
	updateItemCount: Function;
}) => {
	return (
		<div style={{ marginBottom: '0.5em' }}>
			<form>
				<input
					type='checkbox'
					id={`${name} option`}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						updateItemCount(name, e.target.checked ? 1 : 0);
					}}
				/>
				<label htmlFor={`${name} option`}>{name}</label>
			</form>
		</div>
	);
};

export default Options;
