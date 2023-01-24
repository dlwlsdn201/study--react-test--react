import styled from 'styled-components';

export const SECTION_MODULE = styled.div`
	border: ${(props: { borderColor?: string }) =>
		`3px solid ${props?.borderColor || 'red'}`};
	width: 100%;
	padding: 0.5em 1em;
`;

export const DIV_FLEX = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: ${(props: { orderType?: 'options' | 'products' }) =>
		props?.orderType === 'options' && 'column'};
`;

export const BUTTON_MODULE = styled.button`
	width: 200;
	min-width: 180;
	height: 120;
	font-size: 1.2em;
	padding: 0.5em 1em;
	border: none;

	&:hover {
		font-weight: 700;
	}

	&:active {
		background-color: blanchedalmond;
	}
`;
