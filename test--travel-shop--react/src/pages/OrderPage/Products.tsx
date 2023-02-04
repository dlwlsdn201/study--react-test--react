import React, { ChangeEvent } from 'react';

const Products = ({
	name,
	imagePath,
	updateItemCount
}: {
	name: string;
	imagePath: string;
	updateItemCount: Function;
}) => {
	// 특정 상품에 대한 수량을 업데이트 하는 함수
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const currentValue = event.target.value;
		updateItemCount(name, currentValue);
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<img
				style={{ width: '75%' }}
				src={`http://localhost:5000/${imagePath}`}
				alt={`${name} product`}
			/>
			<form style={{ marginTop: '10px' }}>
				<label style={{ textAlign: 'right' }}>{name}</label>
				<input
					style={{ marginLeft: 7 }}
					type='number'
					name='quantity'
					min='0'
					defaultValue={0}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default Products;
