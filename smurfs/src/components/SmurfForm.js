import React, { Fragment, useState } from 'react';
import { postData } from '../actions'; 
import { connect } from 'react-redux'; 
import Smurf from './Smurf'; 

function SmurfForm(props) {
    console.log(props.smurfs); 
    const [ state, setState ] = useState({
        name: '',
        age: '',
        height: '',
    })

    // console.log('state on smurfsform', state)
    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.postData(state)
    }

    const handleChange = (e) => {
       setState({...state, [e.target.name]: e.target.value});
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                    type="text"
                    name="name" 
                    value={state.name}
                    onChange={handleChange}/>
                </label>
                <label>Age:
                    <input 
                    type="text"
                    name="age"
                    value={state.age}
                    onChange={handleChange}/>
                </label>
                <label>Height:
                    <input 
                    type='text'
                    name='height'
                    value={state.height}
                    onChange={handleChange}/>
                </label>
                <button>Add Smurf</button>
            </form>
            {/* <Smurf smurfs={state}/> */}
            {props.smurfs.map((smurf) => (
                <Smurf smurfs={state}/>
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        smurfs: state.smurfs,
    }
}



export default connect(mapStateToProps, { postData })(SmurfForm); 