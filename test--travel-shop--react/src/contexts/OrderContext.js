const { createContext, useMemo, useState, useEffect } = require('react');

export const OrderContext = createContext();

export const pricePerItem = {
	products: 1000,
	options: 500
};

function calculateSubtotal(orderType, orderCounts) {
	let optionCounts = 0;
	for (const count of orderCounts[orderType].values()) {
		optionCounts += count;
	}

	return optionCounts * pricePerItem[orderType];
}

export const OrderContextProvider = (props) => {
	const [orderCounts, setOrderCounts] = useState({
		products: new Map(),
		options: new Map()
	});

	const [totals, setTotals] = useState({
		products: 0,
		options: 0,
		total: 0
	});

	const resetOrderCounts = () => {
		setOrderCounts({
			products: new Map(),
			options: new Map()
		});
	};

	useEffect(() => {
		const productsTotal = calculateSubtotal('products', orderCounts);
		const optionsTotal = calculateSubtotal('options', orderCounts);
		const total = productsTotal + optionsTotal;

		setTotals({
			products: productsTotal,
			options: optionsTotal,
			total
		});
	}, [orderCounts]);

	const value = useMemo(() => {
		/**
		 *
		 * @param {string} itemName 상품명 (America, England 등)
		 * @param {number} newItemCount 상품 수량
		 * @param {'products' | 'options'} orderType 데이터 타입 (상품 데이터, 옵션 데이터)
		 */
		function updateItemCount(itemName, newItemCount, orderType) {
			const newOrderCounts = { ...orderCounts };

			//
			const orderCountsMap = orderCounts[orderType]; // 기존 state
			orderCountsMap.set(itemName, parseInt(newItemCount)); // Map 내부에 업데이트할 key(itemName)의 value를 Number타입의 newItemCount 로 업데이트

			setOrderCounts(newOrderCounts);
		}

		return [{ ...orderCounts, totals }, updateItemCount, resetOrderCounts];
	}, [orderCounts, totals]);

	return <OrderContext.Provider value={value} {...props} />;
};
