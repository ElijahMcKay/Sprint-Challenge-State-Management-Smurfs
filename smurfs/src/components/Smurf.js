import React, { Fragment } from 'react';

function Smurf(props) {
    console.log('smurf comp log', props); 
    return (
        <div>
            <h3>{props.smurfs.name}</h3>
        </div>
    )
}

export default Smurf; 