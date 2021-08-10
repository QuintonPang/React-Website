import React from "react";
import { useState, useEffect } from "react";
import {MdFingerprint} from "react-icons/md";
import {FaTimes, FaBars,FaSun} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () =>{



	const [click,setClick] = useState(false);
	const [button,setButton]= useState(true);

	const handleClick =()=>{


		setClick(!click);


	}

	const closeMobileMenu=()=>{


		setClick(false);


	}


	//differentiate button for mobile(or when screen resized  smaller) and desktop
	
	const showButton = ()=>{


		if (window.innerWidth<=960){

			setButton(true);
		}else{
			setButton(false);

		}


	}

	useEffect(()=>{

		showButton();
		window.addEventListener('resize',showButton);
		return 

			window.removeEventListener('resize',showButton)
		


	},[]);

	return(

		<>

		<nav className="navbar">
			<div className="navbar-container container">
				<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
				<FaSun className='navbar-icon'/>
					
					FLORASUN
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					{click?<FaTimes/>:<FaBars/>}
				</div>
				<ul className={click?'navbar-menu active':'navbar-menu'}>
					<li className="navbar-item">

					<Link to="/" className="navbar-link" onClick={closeMobileMenu}>
						Home
					</Link>
					</li>



					<li className="navbar-item">

					<Link to="/courses" className="navbar-link" onClick={closeMobileMenu}>
		                                                Courses
		                         </Link>
					</li>
					
					<li className="navbar-item">


					<Link to="/Services" className="navbar-link" onClick={closeMobileMenu}>

		Services
		                         </Link>
					</li>
					<li className="navbar-btn"> 


		{button?(        <Link to="#" className="navbar-link">

					<Button buttonStyle="btn--outline" onClick={closeMobileMenu}> Sign Up 

			</Button>
			</Link>
		


		):(

			<Link to="#" className="navbar-link" >

					<Button	buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={closeMobileMenu}>
	
		                                                Sign Up  
							</Button>
							</Link>)}
		                                        </li>
				</ul>
		</div>		
		</nav>
		</>


	);



}


export default Navbar;

