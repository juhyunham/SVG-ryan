import React from 'react';
import Chunsik from '../svg/Chunsik';
import Input from './Input/Input';
import Password from './Password/Password';

const Form = (props) => {
	return (
		<form>
			<h1 className="h1_title">SVG LOGIN</h1>
			<Chunsik />
			<Input />
			<Password />
			<button type="button" className="login_btn">로그인</button>
		</form>
	)
};

export default Form;