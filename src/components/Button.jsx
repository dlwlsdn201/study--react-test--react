import React from 'react';
import ButtonModule from '../Modules/ButtonModule';

const Button = (props) => {
	return <ButtonModule {...props}>{props.content}</ButtonModule>;
};

export default Button;
