import TodoItem from "./Components/TodoItem";
import AddTodoForm from "./Components/AddTodoForm";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import { RootState } from "./store";

// export interface Task {
//   id: number;
//   text: string;
// }

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  // const addTodo = (text: string) => {
  //   const newTodo = { id: Date.now(), text };
  //   setTodos([...todos, newTodo]);
  // };

  // const deleteTodo = (id: number) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };

  return (
    <div className="App">
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={(id) => dispatch(deleteTodo(id))}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
