import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Error from 'src/components/Error';
import { API_URL } from 'src/constants';
import { OrderContext } from 'src/contexts/OrderContext';
import commonStore from 'src/store/common';
import completePageStore from 'src/store/completePage';

const CompletePage = () => {
	// const [loading, setLoading] = useState(false);
	const [totalData] = useContext(OrderContext);
	const { initStep } = commonStore();
	const {
		loading,
		changeLoading,
		orderHistory,
		changeOrderHistory,
		error,
		changeError
	} = completePageStore();

	useEffect(() => {
		orderCompleted(totalData);
	}, [totalData]);

	const orderCompleted = async (totalData) => {
		try {
			const response = await axios.post(`${API_URL}/order`, totalData);
			changeOrderHistory(response.data);
			changeLoading(false);
		} catch (error) {
			changeLoading(true);
		}
	};

	const orderTable = orderHistory.map((item, key) => (
		<tr key={item.orderNumber}>
			<td>{item.orderNumber}</td>
			<td>{item.price}</td>
		</tr>
	));

	if (error) return <Error message='에러가 발생했습니다.' />;

	if (loading) {
		return <div>Loading</div>;
	} else {
		return (
			<div style={{ textAlign: 'center' }}>
				<h2>주문이 성공했습니다.</h2>
				<h3>지금까지 모든 주문</h3>
				<table style={{ margin: 'auto' }}>
					<tbody>
						<tr>
							<th>number</th>
							<th>price</th>
						</tr>
						{orderTable}
					</tbody>
				</table>
				<br />
				<button className='rainbow ranbow-1' onClick={() => initStep()}>
					첫페이지로
				</button>
			</div>
		);
	}
};

export default CompletePage;
