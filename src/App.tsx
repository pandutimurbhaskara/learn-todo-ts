import {useState} from 'react';
import { TodoInputForm } from './TodoInputForm';
import TodoList from './TodoList';

const todo: Todo[] = [
  {
    event: "Learning ts js difference",
    complete: true,
  },
  {
    event: "Sleep this day",
    complete: false,
  },
];


function App() {
  const [todos, setTodos] = useState(todo)
  const [input, setInput] = useState("")

  const toggleTodo = (selectedItem: Todo) => {
    const newItem = todos.map((item) => {
      if (item === selectedItem) {
        item.complete = !item.complete
        return item;
      }
      return item;
    })
    setTodos(newItem)
  }

  const toggleAdd = (item: string) => {
    const newItem: Todo = {
      event: item,
      complete: false,
    }
    setTodos([...todos, newItem])
    setInput("")
  }

  return (
      <>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <TodoInputForm toggleAdd={toggleAdd} input={input} setInput={setInput}/>
      </>
  );
}

export default App;

