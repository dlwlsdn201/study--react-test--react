import { TOption, TOrderType } from '../../../types';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Products from './Products';
import axios from 'axios';
import ErrorBanner from '../../components/Error';

const Type = ({ orderType }: { orderType: TOrderType }) => {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		loadItems(orderType);
	}, []);

	const loadItems = async (orderType: TOrderType) => {
		try {
			const response = await axios.get(`http://localhost:5000/${orderType}`);
			setItems(response.data);
		} catch (error) {
			setError(true);
		}
	};

	const ItemComponents = orderType === 'products' ? Products : null;

	const optionItems =
		ItemComponents &&
		items.map((item: TOption) => (
			<ItemComponents
				key={item.name}
				name={item.name}
				imagePath={item.imagePath}
			/>
		));

	if (error) {
		return <ErrorBanner message='에러가 발생했습니다.' />;
	}

	return <div>{optionItems}</div>;
};

export default Type;
