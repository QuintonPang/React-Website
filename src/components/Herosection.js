import React from "react";
import "./Herosection.css";
import { Link } from "react-router-dom";
import Button from "./Button.js";

const Herosection= ({




	heading,
	text,
	buttonText,
	src,
	alt,
	topLine,
	lightBg,
	lightHeading,
	lightText,
	imgStart



}) =>{


	return(


	<>
		<div className={lightBg?"hero-section":"hero-section darkBg"}>

			<div className="container">



				<div className="hero-row" style={{flexDirection:imgStart==="start"?"row-reverse":"row"}}>



					<div className="hero-column">


						<div className="hero-textwrapper">

							<div className="hero-topline">
								{topLine}
							</div>
							
								<h1 className={lightHeading?"hero-heading":"hero-heading dark"}>									{heading}
								</h1>

								<p className={lightText?"hero-text":"hero-text dark"}>


								{text}

								</p>


								<Link to="/sign-up">


									<Button buttonSize="btn--wide" buttonColor="blue">		
										{buttonText}

									</Button>
								</Link>


							
						</div>


					</div>

					<div className="hero-column">

						<div className="hero-imgwrapper">
							<img src={src} alt={alt} className="hero-img"/>

						</div>


					</div>

				</div>

			</div>



		</div>





		






	</>
	);




}


export default Herosection;
