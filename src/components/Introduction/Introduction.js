import React from 'react';
import './Introduction.css'

const Introduction = () => {
    return (
        <div className='introduction-container'>
            <div className='introduction-para'>
                <h4 style={{'color':'#03e703'}}>I am,</h4>
                <h1>Talha Jubaer Prantor</h1>
                <h1>Welcome to my <span className='neonText'>territory</span> </h1> 
            </div>

            <div className='code-para'>
                <img src="code.png" alt="code" />
            </div>
            

        </div>
    );
};

export default Introduction;