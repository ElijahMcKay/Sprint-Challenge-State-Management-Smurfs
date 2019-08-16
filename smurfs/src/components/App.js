import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'; 
import { getData } from '../actions'; 
import SmurfForm from './SmurfForm'; 


function App(props) {

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />
      <button onClick={props.getData}>Get Existing Smurfs</button>
    </div>
  );
}

const mapStateToProps = state => {

  return {
    getData: state.getData,
  }
}


export default connect(mapStateToProps, { getData })(App)
