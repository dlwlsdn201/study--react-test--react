import React, { useContext, useState } from 'react';
import { OrderContext } from 'src/contexts/OrderContext';
import commonStore from 'src/store/common';

const SummaryPage = () => {
	const [checked, setChecked] = useState(false);
	const [totalData] = useContext(OrderContext);
	const { nextStep } = commonStore();
	// 상품 리스트
	// 1. Map object => Array
	const productArray = Array.from(totalData.products);
	const productList = productArray.map(([key, value]) => (
		<li key={key}>
			{value} {key}
		</li>
	));

	// 옵션 리스트
	const hasOptions = totalData.options.size > 0;
	let optionsRender = null;
	if (hasOptions) {
		const optionsArray = Array.from(totalData.options.keys());
		const optionList = optionsArray.map((key) => <li key={key}>{key}</li>);

		optionsRender = (
			<>
				<h2>옵션: {totalData.totals.options}</h2>
				<ul>{optionList}</ul>
			</>
		);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		nextStep();
	};

	return (
		<div>
			<h1>주문 확인</h1>
			<h2>여행 상품: {totalData.totals.products}</h2>
			<ul>{productList}</ul>
			{optionsRender}
			<form onSubmit={handleSubmit}>
				<input
					type='checkbox'
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
					id='confirm-checkbox'
				/>
				<label htmlFor='confirm-checkbox'>주문하려는 것을 확인하셨나요?</label>
				<br />
				<button type='submit' disabled={!checked}>
					주문 확인
				</button>
			</form>
		</div>
	);
};

export default SummaryPage;
