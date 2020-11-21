import React from 'react';
import './App.js'
import Skills from './skills'
import Experience from './workExperience'

const Details = ()=>{
	return (
		
		 <div>
		  <h2><i style={{fontSize:24+'px'}} className="fa">&#xf140;</i> Carrer Obective</h2>
		 <p>To be a successful member of a Cross-Functional Team in Technology and
contribute my knowledge and skills to Organization, Learning New Trends and
grow Professionally.</p>
		 <h2><i style={{fontSize:24+'px'}} className='fas'>&#xf5fc;</i> Technical Skills</h2>
		 <Skills />
		 <Experience />
		 </div>
            
		)
}

export default Details;
