// export const todosReducers =()=>{
// switch(){
//     default:
//         return[]:
// }
// }
// Define the initial state for the todos
 
import * as actionType from '../actions/type';
// const initialState = [];

export const todosReducers = (state = [], action) => {
    switch (action.type) {
        // Add cases for different action types here
        case actionType.ADDNEW_TODO:
            return [action.payload,...state] 

        default:
            return state; // Return the current state by default
    }
};
