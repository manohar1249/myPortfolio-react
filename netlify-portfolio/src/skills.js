import React from 'react';
import './App.js'
import Li from './li'
const Skills = ()=>{
	return ( <ul className="skills">
				<Li labelfor="Cprog" language="C programming" value="80" id="Cprog"/>
                <Li labelfor="js" language="Java Script" value="85" id="js"/>
                <Li labelfor="html" language="HTML" value="80" id="html"/>
                <Li labelfor="css" language="CSS" value="70" id="css"/>
                <Li labelfor="sql" language="SQL" value="80" id="sql"/>
                <Li labelfor="mongo" language="MongoDB" value="50" id="mongo"/>
                <Li labelfor="node" language="Node JS" value="70" id="node"/>                
            </ul>)
}

export default Skills;