import styled from 'styled-components';

export const SECTION_MODULE = styled.div`
	border: ${(props: { borderColor?: string }) =>
		`3px solid ${props?.borderColor || 'red'}`};
	width: 100%;
`;

export const DIV_FLEX = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: ${(props: { orderType?: 'options' | 'products' }) =>
		props?.orderType === 'options' && 'column'};
`;
