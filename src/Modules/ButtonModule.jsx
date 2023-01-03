import React from 'react';
import styled from 'styled-components';

const buttonElement = (props) => {
	const { testid, children, className } = props;
	return (
		<button className={className} data-testid={testid} onClick={props.onClick}>
			{children}
		</button>
	);
};

const StyledButtonModule = styled(buttonElement)`
	width: 200px;
	height: 70px;
	background: #b77ae6;
	color: #fff;
	font-size: 2em;
`;

const ButtonModule = (props) => (
	<StyledButtonModule {...props}>{props.children}</StyledButtonModule>
);
export default ButtonModule;
