import React from 'react'
import logo from '../../images/1break_logo.png';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-transparent pt-4">
        <div class="container break-container ">
          <a class="navbar-brand" href="#"><img src={logo} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav nav-menu">
                <li class="nav-item ">
                  <a class="nav-link text-dark" aria-current="page" href="#">Roadmap</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">knowledge base</a>
                </li>
                <li class="nav-item float-end">
                  <a class="nav-link text-dark " aria-current="page" href="#">login</a>
                </li>
                <li class="nav-item float-end">
                <button type="button" className="btn btn-outline-danger px-4">signup</button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
