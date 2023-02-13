import { rest } from 'msw';

export const handlers = [
	rest.get('http://localhost:5000/products', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'America',
					imagePath: '/images/America.jpeg'
				},
				{
					name: 'England',
					imagePath: '/images/England.jpeg'
				}
			])
		);
	}),
	rest.get('http://localhost:5000/options', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'Insurance'
				},
				{
					name: 'Dinner'
				}
			])
		);
	}),

	// 주문 완료 POST 요청 API
	rest.post('http://localhost:5000/order', (req, res, ctx) => {
		const dummyData = [{ orderNumber: 231234214515, price: 2000 }];

		return res(ctx.json(dummyData));
	})
];
