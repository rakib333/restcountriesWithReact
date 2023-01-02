import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props)
    return (
        <div className='country'>
            <h2>{props.name}</h2>
            <h4>{props.capital}</h4>
            <div className='image'>
                <img src={props.flag} alt="img" />
            </div>
            <p>Population : {props.population }</p>
        </div>
    );
};

export default Country;