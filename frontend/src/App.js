import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={NoteListPage} />
        <Route path="/note/:id" component={NotePage} />
      </div>
    </Router>
  );
}

export default App;
