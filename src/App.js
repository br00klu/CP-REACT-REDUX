import "./App.css";
import TaskList from "./Components/TaskList";

function App() {
  //console.log('state',state)

  return (
    <div className="App">
      <p>My TO-DO List</p>
      <TaskList />
    </div>
  );
}

export default App;
