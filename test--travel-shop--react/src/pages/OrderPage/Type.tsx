import { TOption, TOrderType } from '../../../types';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Products from './Products';
import axios from 'axios';
import ErrorBanner from '../../components/Error';
import Options from './Options';
import { DIV_FLEX } from 'src/styles/modules';
import { STANDARD_UNIT } from 'src/config/unit';
import { OrderContext, pricePerItem } from 'src/contexts/OrderContext';

const Type = ({ orderType }: { orderType: TOrderType }) => {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);
	const [orderData, updateItemCount] = useContext(OrderContext);

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

	const ItemComponents = orderType === 'products' ? Products : Options;

	const optionItems =
		ItemComponents &&
		items.map((item: TOption) => (
			<ItemComponents
				key={item.name}
				name={item.name}
				imagePath={item.imagePath}
				updateItemCount={(itemName: string, newItemCount: number) =>
					updateItemCount(itemName, newItemCount, orderType)
				}
			/>
		));

	if (error) {
		return <ErrorBanner message='에러가 발생했습니다.' />;
	}

	return (
		<>
			<h2>주문 종류</h2>
			<p>
				{STANDARD_UNIT} {pricePerItem[orderType]}
			</p>
			<p>
				총 가격: {STANDARD_UNIT} {orderData.totals[orderType]}
			</p>
			<DIV_FLEX orderType={orderType}> {optionItems}</DIV_FLEX>
		</>
	);
};

export default Type;
