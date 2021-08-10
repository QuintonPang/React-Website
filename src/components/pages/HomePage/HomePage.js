import React from "react";
import { mathsCourse, scienceCourse,programmingCourse} from "./Data.js";
import Herosection from "../../Herosection.js";
import Pricing from "../../Pricing.js";

const HomePage =()=>{



	return(

		<>

		<Herosection {...mathsCourse}/>
		<Herosection {...scienceCourse}/>
		<Herosection {...programmingCourse}/>
		<Pricing/>
		</>

	);


}


export default HomePage;
