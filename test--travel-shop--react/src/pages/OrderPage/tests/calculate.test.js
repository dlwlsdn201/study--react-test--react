import { render, screen } from '../../../test-utils';
import userEvent from '@testing-library/user-event';
import Type from '../Type';

// 상품 구매 수량이 업데이트 될 때, 총 상품 합계 업데이트 기능 테스트
it('update product total when products change', async () => {
	render(<Type orderType='products' />);

	// exact: false 를 하면 '상품 총 가격:' 텍스트 뒤에 다른 string 텍스트가 붙어도 인식함.
	const productTotal = screen.getByText('상품 총 가격:', { exact: false });
	expect(productTotal).toHaveTextContent('0'); // 초기값 0

	// 아메리카 여행 상품 +1 개 올리기
	const americaInput = await screen.findByRole('spinbutton', {
		name: 'America'
	});

	userEvent.clear(americaInput);
	userEvent.type(americaInput, '1'); // americaInput 요소에 값 1을 입력한다.
	expect(productTotal).toHaveTextContent('1000');
});

it("update option's total when options change", async () => {
	render(<Type orderType='options' />); // 메인 컴포넌트 렌더링 (render 메서드는 context Provider 을 wrapper 옵션으로 정의한 커스텀 함수)

	// 옵션 총 가격이 0부터 시작
	const optionsTotal = screen.getByText('옵션 총 가격', { exact: false }); // 정의한 text 외에 추가적인 text가 붙어있는 것을 허용함.
	expect(optionsTotal).toHaveTextContent('0'); // 옵션 총 가격의 최초 값은 0

	// 보험 옵션 추가
	const insuranceCheckbox = await screen.findByRole('checkbox', {
		name: 'Insurance'
	}); // role='checkbox' && name='Insurance' 인 요소 존재 여부
	userEvent.click(insuranceCheckbox); // 보험 옵션 체크박스에 클릭 이벤트 발생
	expect(optionsTotal).toHaveTextContent('500'); // 보험 옵션 체크박스를 클릭했을 떄, 총 가격은 500원?

	// 디너 옵션 추가
	const dinnerCheckbox = screen.getByRole('checkbox', { name: 'Dinner' }); // role='checkbox' && name='Dinner' 인 요소 존재 여부
	userEvent.click(dinnerCheckbox); // 디너 옵션 체크박스에 클릭 이벤트 발생
	expect(optionsTotal).toHaveTextContent('1000'); // 디너 옵션 체크박스를 클릭했을 때, 총 가격은 1000원?

	// 디너 옵션 제거
	userEvent.click(dinnerCheckbox); // 체크되어 있는 디너 옵션에 다시 클릭 이벤트 발생하여 체크 해제
	expect(optionsTotal).toHaveTextContent('500'); // 디너 옵션을 체크 해제하면 다시 총 가격은  500원?
});
