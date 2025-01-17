
import axios from 'axios'; 

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'; 
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'; 
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'; 
export const POST_SMURFS_START = 'FETCH_SMURFS_START'; 
export const POST_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'; 
export const POST_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'; 

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START }); 
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res); 
                dispatch({ type: FETCH_SMURFS_SUCCESS , payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.response }); 
            })
    }
}

export const postData = (smurf) => {
    console.log('postData log', smurf); 
    return dispatch => {
        dispatch({ type: POST_SMURFS_START }); 
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log(res); 
                dispatch({ type: POST_SMURFS_SUCCESS , payload: res.data })
            })
            .catch(err => {
                dispatch({ type: POST_SMURFS_FAILURE, payload: err.response }); 
            })
    }
}
