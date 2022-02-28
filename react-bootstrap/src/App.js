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
    <Rourte>
      <div className="App">
        <header className="App-header">

          <NavBar bg="dark" variant="dark">

            <Container>

              <NavBar.Brand>

                <Link to={"/create-user"} className="nav-link">

                  React MERN Stack CRUD

                </Link>

              </NavBar.Brand>

              <Nav className="justify-content-end">

                <Nav>

                  <Link to={"/create-user"} class="nav-link">

                    Create USER. 

                  </Link>

                </Nav>

                <Nav>

                  <Link to={"/user-list"} class="nav-link">

                    USER List.

                  </Link>

                </Nav>

              </Nav>  

            </Container>

          </NavBar>
          
        </header>

        <Container>

          <Row>

            <Col md="12">
            
              <div className="wrapper">

                <Switch>

                  <Rourte exact path="/" component={CreateUser} />
                  <Rourte path="/create-user" component={CreateUser} />
                  <Rourte path="/edit-use:id" component={EditUser} />
                  <Rourte path="/user-list" component={UserList} />

                </Switch>

              </div>
            
            </Col>

          </Row>

        </Container>

      </div>
    </Rourte>
  );
}

export default App;
