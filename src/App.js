import './App.css';
import AddTodos from "./component/AddTodo/AddTodos"
import List from "./component/List/List"

function App() {
  return (
    <div className="App">
    <h1>Todo App</h1>
      <AddTodos />
      <List />
    </div>
  );
}

export default App;
