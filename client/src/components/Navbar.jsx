import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="App-header">
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">YelpCamp</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <Link class="nav-link" to="/">Home</Link>
              <Link class="nav-link" to="/campgrounds">Campgrounds</Link>
              <Link class="nav-link" to="/campgrounds/new">New Campground</Link>
          </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
