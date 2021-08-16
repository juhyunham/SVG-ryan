import React from 'react';
import Chunsik from '../svg/Chunsik';
import Input from './Input/Input';
import Password from './Password/Password';

const Form = (props) => {
	const inputRef = React.createRef();

	const onSubmit = () => {
		localStorage.setItem(`id`, inputRef.current.value)
		inputRef.current.value = ``
	}

	return (
		<form>
			<h1 className="h1_title">SVG LOGIN</h1>
			<Chunsik />
			<Input ref={inputRef}/>
			<Password />
			<button type="button" className="login_btn" onClick={onSubmit}>로그인</button>
		</form>
	)
};

export default Form;