
import './App.css';
import Todolist from './components/Todolist';
import Pagination from './paggination/Pagination';

function App() {
  return (
    <div className="App">
     <h6>todo list</h6>
     <Todolist/>  
     <Pagination/>
    </div>
  );
}

export default App;
