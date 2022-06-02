import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  <Router>
      <Route></Route>
  </Router>

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = ({ target: { value }}) => setUser(value);
  const handlePasswordChange = ({ target: { value }}) => setPassword(value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`User: ${user}, Password: ${password}`);
  };
  return (
    <div className="App">
      <section>
        <div className="container">
          <div className="col">
            <nav className="navbar navbar-expand-lg mb-1 mt-1">
              <a href="#" className="navbar-brand">
                <img src="img/ortex.jpg" alt="ORTEX" />
                <h1>ORTEX Analytics</h1>
              </a>
            </nav>
            <div className="box">
              <div className="container">
                <div className="col-md-12">
                  <p className="login">-  Sign-in  -</p>
                  <form>
                    <p className="field">Username:</p>
                    <input type="text" />
                    <br />
                    <p className="field">Password:</p>
                    <input type="password" />
                    <br />
                    <a data-qa="login-menu" id="get-into" href="#" id="sign-in" class="text-warning border-radius-round border-h-dark ml-3 pl-20 pr-20 p-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1D1E20" width="24px" height="24px"><g fill="none"><path d="M0 0h24v24H0V0z"></path><path d="M0 0h24v24H0V0z" opacity=".87"></path></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg> <p class="fs-15 ml-10 fw-600 fs-17-xxl">Login</p></a>
                  </form>
                  <div>
                    <p className="link">
                      <a href="#" data-bs-toggle="modal" data-bs-target="#addClientModal">Restore password</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="addClientModal">
        <div className="modal-dialog modl-lg">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="text-danger">Fill in the fields please</h5>
              <button className="close" data-bs-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <form className="bg-light">
              <div className="modal-body">
                <div className="form-group">
                  <p>Username:</p>
                  <input type="text" />
                  <p>New  password:</p>
                  <input type="password" />
                  <p>Repeat password:</p>
                  <input type="password" />
                </div>
                <button className="btn btn-success">OK</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
