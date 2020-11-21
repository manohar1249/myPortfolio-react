import React from 'react'
import './App.css'

const Li = (props)=>{
	return <li><label for={props.labelfor}>{props.language}</label> <progress value={props.value} className="progressbar" id={props.id} max="100"></progress></li>
}

export default Li;