import React from 'react';
import Chunsik from '../svg/Chunsik';
import Input from './Input/Input';
import Password from './Password/Password';

const Form = (props) => {
	const inputRef = React.createRef();
	const passwordRef = React.createRef();

	const onSubmit = () => {
		localStorage.setItem(`id`, inputRef.current.value)
		localStorage.setItem(`password`, passwordRef.current.value)
		inputRef.current.value = ``
		passwordRef.current.value = ``
	}

	return (
		<form>
			<h1 className="h1_title">SVG LOGIN</h1>
			<Chunsik />
			<Input ref={inputRef}/>
			<Password ref={passwordRef}/>
			<button type="button" className="login_btn" onClick={onSubmit}>로그인</button>
		</form>
	)
};

export default Form;