import React from 'react';

const chunsik = (props) => (
	<svg height="300" width="350">
		<g className="face">
			<ellipse cx="220" cy="200" rx="180" ry="150" stroke="black" strokeWidth="5" fill="#ffd677" />
			<path d="M 83 105 q 0 -70 60 -38" stroke="black" strokeWidth="5" fill="#ffd677"/>
			<path d="M 297 67 q 60 -32 60 38" stroke="black" strokeWidth="5" fill="#ffd677" />
		</g>
		<g className="eyes">
			<circle r="10" cx="170" cy="170"/>
			<circle r="10" cx="270" cy="170"/>
			{/* <path d="M 160 170 q 10 -30 20 0" stroke="black" strokeWidth="5" />
			<path d="M 260 170 q 10 -30 20 0" stroke="black" strokeWidth="5" /> */}
		</g>
		<g className="cheek">
			<circle r="30" cx="140" cy="220" fill="#ff9470"/>
			<circle r="30" cx="300" cy="220" fill="#ff9470"/>
		</g>
		<g className="mouth">
		{/* 웃을 때 240에서 260으로 */}
		<ellipse cx="220" cy="240" rx="15" ry="20" fill="#bf5849" stroke="black" strokeWidth="5"/>
		</g>
		<g className="nose">
			<line x1="150" y1="235" x2="290" y2="205" stroke="black" strokeWidth="5"/>
			<line x1="150" y1="205" x2="290" y2="235" stroke="black" strokeWidth="5"/>
			<path d="M 170 220 C 170 180 270 180 270 220 C 270 260 220 260 220 230 C 220 260 170 260 170 220" stroke="black" strokeWidth="5" fill="white"/>
		</g>
	</svg>
	
);

export default chunsik;