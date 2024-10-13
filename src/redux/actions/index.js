// //   for api calls
// import axios from 'axios';


// const API_URL='http:localhost:8000';

// export const addNewTodo =() => {
//     try{
//     axios.post(`${API_URL}/todos`, {data})
//     }
//     catch (error){
//         console.log('error while colling addNewTodo API',error.message);
//     }
// }
import axios from 'axios';
import { ADDNEW_TODO } from './type';

const API_URL = 'http://localhost:8000'; // Added double slashes for the URL

export const addNewTodo = (data) => async(dispatch)=> {
    return async (dispatch) => {
         try {
             const res=   await axios.post(`${API_URL}/todos`, { data}); // Use 'data: todo' to send the todo
            dispatch({ type: ADDNEW_TODO, payload: res.data }); // Dispatch the action with the API response
        } catch (error) {
            console.log('Error while calling addNewTodo API', error.message);
        }
    };
};
