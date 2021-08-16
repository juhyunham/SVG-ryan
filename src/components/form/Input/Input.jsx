import React from 'react';

const Input = React.forwardRef((props, ref) => (
	<span className="input_box">
		<input ref={ref} type="text" placeholder="아이디를 입력하세요."/>
	</span>
));

export default Input;