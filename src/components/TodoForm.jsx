// import {useState} from "react";

// import { useDispatch } from "react-redux";

// import { addNewTodo } from "../redux/actions";

// const TodoForm=() =>{
//     const [yext, setText] =useState("");

//     const useDispatch=useDispatch();
     
//     const onFormSubmit=(e)=>{
//         e.preventDefault();
//         dispatch(addNewTodo());

//     }
//     const onInputChange=(e)=>{
//         setText(e.target.value);
//     }
 
//     return(
//         <form className="form">
//             <input 
//             placeholder="Enter new todo.."
//             className="input"/>
//         </form>
//     )
// }
// export default TodoForm;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
    const [text, setText] = useState(""); // Fixed variable name from "yext" to "text"

    const dispatch = useDispatch(); // Make sure this is defined correctly

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text)); // Use the correct dispatch function
        setText(""); // Clear the input after submission
    };

    const onInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        // <form className="form" onSubmit={onFormSubmit}>
        //     <input 
        //         placeholder="Enter new todo.."
        //         className="input"
        //         value={text}
        //         onChange={onInputChange}
        //     />
        //     {/* <button type="submit">Add Todo</button> */}
        // </form>
         <form className="form">
                      <input 
                     placeholder="Enter new todo.."
                      className="input"/>
                 </form>
    );
}

export default TodoForm;
