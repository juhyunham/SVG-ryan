import React from 'react';

const Password = React.forwardRef((props, ref) => (
	<span className="input_box">
		<input ref={ref} type="password" placeholder="비밀번호를 입력하세요."/>
	</span>
));

export default Password;