import React from "react";
import { mathsCourse, scienceCourse,programmingCourse} from "./Data.js";
import Herosection from "../../Herosection.js";

const Courses =()=>{



	        return(

			                <>

			                <Herosection {...mathsCourse}/>
			                <Herosection {...scienceCourse}/>
			                <Herosection {...programmingCourse}/>
			
			                </>

			        );


}


export default Courses;
