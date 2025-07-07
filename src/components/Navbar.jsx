import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <Link to={'/'} class="navbar-brand text-warning"><i class="bi bi-cart-plus"></i> Ecommerce</Link>
        <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 gap-lg-5 fs-5 mb-lg-0">
            <li class="nav-item">
              <Link to={'/'} class="nav-link text-light active" aria-current="page"><i className="bi bi-house-door"></i> Home</Link>
            </li>
            <li class="nav-item">
              <Link to={'/about'} class="nav-link text-light"><i class="bi bi-question-circle"></i> About</Link>
            </li>
            <li class="nav-item">
              <Link to={'/products'} class="nav-link text-light"><i class="bi bi-bag-plus"></i> Products</Link>
            </li>
            <li class="nav-item">
              <Link to={'/contact'} class="nav-link text-light"><i class="bi bi-phone"></i> Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar