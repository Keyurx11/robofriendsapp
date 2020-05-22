import React from 'react';

const Scroll = (props) => {
	return (
	<div style={{ overflow: 'scroll', height: '500px', padding: '7px', border: '2px solid #0ccac4'}}>
	 {props.children}
	</div> 
	)
}

export default Scroll;