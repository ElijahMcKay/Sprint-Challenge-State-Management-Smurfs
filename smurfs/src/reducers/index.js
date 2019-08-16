import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, POST_SMURFS_START, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE } from '../actions'; 

export const initialState = {
    smurfs: [], 
    isLoading: false,
    error: '',
}



export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true, 
                error: ''
            };
        case FETCH_SMURFS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                films: action.payload,
            }
        case FETCH_SMURFS_FAILURE: 
            return {
                ...state, 
                isLoading: false,
                error: 'Something went wrong'
            }
            case POST_SMURFS_START:
                return {
                    ...state,
                    isLoading: true, 
                    error: ''
                };
            case POST_SMURFS_SUCCESS: 
                return {
                    ...state,
                    isLoading: false,
                    films: action.payload,
                }
            case POST_SMURFS_FAILURE: 
                return {
                    ...state, 
                    isLoading: false,
                    error: 'Something went wrong'
                }
        default: 
            return state; 
    }
}