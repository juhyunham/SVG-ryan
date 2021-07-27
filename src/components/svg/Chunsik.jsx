import React from 'react';

const chunsik = (props) => (
	<svg id="chunsik" viewBox="0 0 300 300">
		<g class="ears">
			<path d="M46,32 L46,30 C46,16 26,16 26,30 L26,32" fill="#ffd677" stroke="#000" stroke-width="2.5" stroke-linecap="round"></path>
			<path d="M74,32 L74,30 C74,16 94,16 94,30 L94,32" fill="#ffd677" stroke="#000" stroke-width="2.5" stroke-linecap="round"></path>
		</g>
		
		<ellipse class="face" cx="100" cy="150" rx="60" ry="55" fill="#ffd677" stroke="#000" stroke-width="2.5"></ellipse>
		{/* <g class="eyes">
			<circle cx="50" cy="73" r="3" fill="#000">
			</circle><circle cx="80" cy="50" r="3" fill="#000"></circle>
		</g>
		<g class="muzzle">
			<path d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71" fill="#fff"></path>
			<path d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71" fill="#fff" stroke="#000" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></path>
        </g> */}
	</svg>			
);

export default chunsik;