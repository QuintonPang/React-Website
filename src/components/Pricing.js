import React from "react";
import Button from "./Button.js";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalBall } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";


const Pricing= () => {

	return(
		//css for all react-icons

		<IconContext.Provider value = {{ color:"#fff", size:64}}>

			<div className="pricing-section">


				<div className="pricing-wrapper">

				

					<h1 className="pricing-heading">

						PRICING						


					</h1>

					<div className="pricing-container">
						<Link to="/sign-up" className="pricing-card">
							<div className="pricing-cardinfo">

								<div className="pricing-icon">


									<FaFire/>
								</div>



								<h3>Starter Pack</h3>
								<h5> RM 10.00 </h5>
								<p> per month </p>
								<ul className="pricing-feature">


									<li>Productive</li>
									<li>Cheap</li>
									<li>Experienced mentors</li>



								</ul>

								<Button buttonSize="btn--wide" buttonColor = "primary">

									CHOOSE THIS PLAN

								</Button>

								
							</div>


						</Link>




		<Link to="/sign-up" className="pricing-card">     
		<div className="pricing-cardinfo">

		                                                                
		<div className="pricing-icon">


		                                                               
		<BsXDiamondFill/>
		                                                          
		</div>


		                                                                                                                                                            
		<h3>Intermediate  Pack</h3>
		                                                           
		<h5> RM 30.00 </h5>
		                                                             
		<p> per month </p>
		                                                         
		<ul className="pricing-feature">


		                                                                     
	<li>Productive</li>                                               
		<li>Includes Transportation</li>
		                                                                  
		<li>Experienced mentors</li>



		                                                                </ul>

		                                                                <Button buttonSize="btn--wide" buttonColor = "blue">

		                                                                        CHOOSE THIS PLAN

		                                                                </Button>


		                                                        </div>


		                                                </Link>





		<Link to="/sign-up" className="pricing-card">                                                           <div className="pricing-cardinfo">

		                                                                <div className="pricing-icon">


		                                                                        <GiCrystalBall/>
		                                                                </div>


		                                                                                                                                                                <h3>Diamond Pack</h3>
		                                                                <h5> RM 50.00 </h5>
		                                                                <p> per month </p>
		                                                                <ul className="pricing-feature">


		                                                                        <li>100% Useful</li>                                                                             <li>Non-stop Practice</li>
		                                                                        <li>Experienced mentors</li>



		                                                                </ul>

		                                                                <Button buttonSize="btn--wide" buttonColor = "primary">

		                                                                        CHOOSE THIS PLAN

		                                                                </Button>


		                                                        </div>


		                                                </Link>


					</div>
				</div>


				




			</div>

		</IconContext.Provider>


	);



}

export default Pricing
