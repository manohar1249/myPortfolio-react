import React from 'react';
import './App.css';
import Banner from './banner'
import Contact from './contact'
import Details from './details'
import Education from './education'
import Strengths from './strengths'
import Project from './project'

const App = () => {
        return ( < div className = "boundary" >
            <Banner />
            <Contact />
            <hr />
            <Details />
            <Project />
            <Education />
            <Strengths />
            </div>
            )
        }



 export default App;