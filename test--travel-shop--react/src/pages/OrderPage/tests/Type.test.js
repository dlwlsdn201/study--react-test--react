import Type from '@src';
import { screen } from '@testing-library/react';
import { render } from 'node_modules/@testing-library/react/types/index';

it('displays product images from server', async () => {
	// orderType props 를 쓴 이유 ? Type 컴포넌트 내의  Products 컴포넌트를 테스트하기 위함
	render(<Type orderType='products' />);

	// 이미지 찾기
	const productImages = await screen.findAllByRole('img', {
		name: /product$/i // product로 끝나는 이름의 이미지
	});
	expect(productImages).toHaveLength(2); // 이미지가 총 2개인가?

	const altText = productImages.map((element) => element.alt);

	// 이미지 파일들의 alt 속성 값들이 'America product' , 'England product' 와 일치하는가?
	expect(altText).toEqual(['America product', 'England product']);
});
