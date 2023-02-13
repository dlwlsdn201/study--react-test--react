import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('From order to order completion', async () => {
	render(<App />);

	////////////////// [주문 페이지] //////////////////
	const americaInput = await screen.findByRole('spinbutton', {
		name: 'America'
	});

	userEvent.clear(americaInput);
	userEvent.type(americaInput, '2'); // 해당 Input 입력 값을 2로 설정

	const englandInput = await screen.findByRole('spinbutton', {
		name: 'England'
	});

	userEvent.clear(englandInput);
	userEvent.type(englandInput, '3');

	const insuranceCheckbox = await screen.findByRole('checkbox', {
		name: 'Insurance'
	});

	// 옵션 - [Insurance] 체크박스 체크
	userEvent.click(insuranceCheckbox);

	const orderButton = screen.getByRole('button', {
		name: '주문하기'
	});

	// [주문하기] 버튼 클릭
	userEvent.click(orderButton);

	////////////////// [주문 확인 페이지] //////////////////
	const summaryHeading = screen.getByRole('heading', {
		name: '주문 확인'
	});
	expect(summaryHeading).toBeInTheDocument(); // <h$ name="주문 확인"></h$> 이라는 태그가 document 에 존재하는가?

	const productHeading = screen.getByRole('heading', {
		//
		name: '여행 상품: 5000'
	});
	expect(productHeading).toBeInTheDocument(); // <h$ name="여행 상품: 5000"></h$> 이라는 태그가 document 에 존재하는가? (Refer: 8~20 line)

	const optionsHeading = screen.getByRole('heading', {
		name: '옵션: 500'
	});
	expect(optionsHeading).toBeInTheDocument(); // <h$ name="옵션: 500"></h$> 이라는 태그가 document 에 존재하는가? (Refer: 22~27 line)

	expect(screen.getByText('2 America')).toBeInTheDocument(); // document 안에 '2 America' 라는 텍스트가 존재하는가?
	expect(screen.getByText('3 England')).toBeInTheDocument(); // document 안에 '3 England' 라는 텍스트가 존재하는가?
	expect(screen.getByText('Insurance')).toBeInTheDocument(); // document 안에 'Insurance' 라는 텍스트가 존재하는가?

	// <input type='checkbox' name="주문하려는 것을 확인하셨나요?"/> Element 요소
	const confirmCheckbox = screen.getByRole('checkbox', {
		name: '주문하려는 것을 확인하셨나요?'
	});

	userEvent.click(confirmCheckbox); // 체크박스 클릭

	// <button name="주문 확인"/> Element 요소
	const confirmOrderButton = screen.getByRole('button', {
		name: '주문 확인'
	});
	userEvent.click(confirmOrderButton); // 버튼 클릭

	////////////////// [주문 완료 페이지] //////////////////

	// 1. 주문 완료 내역 데이터를 불러오기 전 Loading 텍스트를 가지고 있는 Element 마운트 여부
	const loading = screen.getByText(/loading/i);
	expect(loading).toBeInTheDocument();

	// 2. 주문 성공 화면의 Header Element 마운트 여부
	const completeHeader = await screen.findByRole('heading', {
		name: '주문이 성공했습니다.'
	});
	expect(completeHeader).toBeInTheDocument();

	// 3. 주문 완료 내역 데이터 불러오기가 완료되었을 경우 Loading 텍스트를 가지고 있는 Element 언마운트 여부
	const loadingDisappeared = screen.queryByText('loading');
	expect(loadingDisappeared).not.toBeInTheDocument();

	// 4. [첫 페이지로] 버튼 기능 동작 여부
	const firstPageButton = screen.getByRole('button', {
		name: '첫페이지로'
	});
	userEvent.click(firstPageButton);
});
