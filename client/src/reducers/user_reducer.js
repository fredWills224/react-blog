import{
    LOGIN_USER,
    REGISTER_USER
} from '../actions/types';

export default function(state={}, action){

    switch(action.type){
        
        case LOGIN_USER:
            //(...)state = everything from state
            return {...state, loginSuccess: action.payload}
        ;
        case REGISTER_USER:
            //(...)state = everything from state
            return {...state, loginSuccess: action.payload}
        ;
        default:
            return state
        ;
        
    }

}