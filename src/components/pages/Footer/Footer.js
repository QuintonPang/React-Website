import React from"react";
import { FaSun, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import Button from "../../Button.js";
import { Link } from "react-router-dom";

const Footer =() =>{




	return(


		<div className="footer-container">


			<section className="footer-subscription">

				<p className="footer-subscription-heading">

					
					Subscribe to our newsletter for latest info!
				</p>
				<p className="footer-subscription-text">

					You can unsubscribe at anytime

				</p>
				
				<div className="footer-input-area">

					<form>
						<input 

							className="footer-input"
							type="email"
							name="email"
							placeHolder="Enter your email here"
						/>
					<Button buttonStyle="btn--outline">Susbcribe</Button>

					</form>

				</div>

			




			</section>


			<div className="footer-link">


				<div className="footer-link-wrapper">

					<div className="footer-link-item">



						<h2>About Us</h2>
						<Link to="/sign-up"> How it works</Link>
						<Link to='/'>Testimonials</Link>
						<Link to='/'>Careers</Link>

						<Link to='/'>Investors</Link>
						<Link to='/'>Terms of Service</Link>						 </div> 

					<div className='footer-link-item'> 
						<h2>Contact Us</h2>		


						<Link to='/'>Contact</Link> 
						<Link to='/'>Support</Link>
						<Link to='/'>Destinations</Link>

						<Link to='/'>Sponsorships</Link>			

					</div>

				</div>		
					
				<div className='footer-link-wrapper'> 

					<div className='footer-link-item'>

						<h2>Videos</h2>
						<Link to='/'>Submit Video</Link>
						<Link to='/'>Ambassadors</Link> 
						<Link to='/'>Agency</Link> 
						<Link to='/'>Influencer</Link>
					</div>

					<div className='footer-link-item'>							
							<h2>Social Media</h2> 
							<Link to='/'>Instagram</Link>

						 <Link to='/'>Facebook</Link>
							 <Link to='/'>Youtube</Link> 
						<Link to='/'>Twitter</Link> 

					</div>
					
				</div>

			</div>


			<section className="social-media">



				<div className="social-media-wrap">

					<div className="footer-logo">

						<Link to="/" className="social-logo">
							<FaSun	className="navbar-logo"/>
							FLORASUN

						</Link>

					</div>
				<small className="website-rights">FLORASUN © 2021 </small>

				<div className='social-icons'>

					<Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook' > 

					<FaFacebook />

					</Link>

					<Link className='social-icon-link' to='/' target='_blank' aria-label='Instagram' >

					<FaInstagram />

					</Link> 

					<Link className='social-icon-link' to={ '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber' } target='_blank' aria-label='Youtube' >			
					<FaYoutube />

					</Link> 			

					<Link className='social-icon-link' to='/' target='_blank' aria-label='Twitter' >

					<FaTwitter />


					</Link> 
					<Link className='social-icon-link' to='/' target='_blank' aria-label='LinkedIn' > 
					<FaLinkedin />

					</Link> 

				</div>


				</div>


			</section>
			
		</div>




	);


}


export default Footer;
