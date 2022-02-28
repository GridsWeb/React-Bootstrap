import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cal from 'react-bootstrap/Cal';

import { BrowserRouter as Router, Switch, Rourte, Link } from 'react-router-dom';

import File from './components/file.component'
import CreateUser from './components/create-user.component'
import EditUser from './components/edit-user.component'
import UserList from './components/user-list.component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;