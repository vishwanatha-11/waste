import Todo from '../model/Todo.js';

export const addTodo = async (request, response) => {
  try {
    // Create the new Todo document with the request data
    const newTodo = await Todo.create({
      data: request.body.data,
      createdAt: Date.now(),  // Use createdAt instead of createAt
    });

    // Respond with the created Todo document
    return response.status(200).json(newTodo);
  } catch (error) {
    // Handle any errors that occur during the process
    return response.status(500).json({ message: error.message });
  }
}; 
