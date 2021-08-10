import React from "react";
import "./Button.css";

const STYLES = [ 'btn--primary','btn--outline' ];

const SIZES = [ 'btn--large','btn--medium','btn--mobile','btn--wide' ];

const COLORS = [ 'primary','red','blue','green'];

const Button =({



	children, //children is the text between <Button></Button>
	type,
	onClick,
	buttonStyle,
	buttonSize,
	buttonColor


	})=>{ 
	
	const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize)?buttonSize:SIZES[0];
	
	const checkButtonColor = COLORS.includes(buttonColor)?buttonColor:COLORS[0];


	return (
		<button className={`btn ${checkButtonSize} ${checkButtonStyle} ${checkButtonColor}`} onClick={onClick} type={type}>


		{children}


		</button>


	);

}

export default  Button;
