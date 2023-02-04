import { render, screen } from '../../../test-utils';
import userEvent from '@testing-library/user-event';
import Type from '../Type';

// 상품 구매 수량이 업데이트 될 때, 총 상품 합계 업데이트 기능 테스트
it('update product total when products change', async () => {
	render(<Type orderType='products' />);

	// exact: false 를 하면 '상품 총 가격:' 텍스트 뒤에 다른 string 텍스트가 붙어도 인식함.
	const productTotal = screen.getByText('총 가격:', { exact: false });
	expect(productTotal).toHaveTextContent('0'); // 초기값 0

	// 아메리카 여행 상품 +1 개 올리기
	const americaInput = await screen.findByRole('spinbutton', {
		name: 'America'
	});

	userEvent.clear(americaInput);
	userEvent.type(americaInput, '1'); // americaInput 요소에 값 1을 입력한다.
	expect(productTotal).toHaveTextContent('1000');
});
