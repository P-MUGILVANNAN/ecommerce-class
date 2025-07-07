import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div class="card text-center text-light bg-secondary">
            <div class="card-header">
                <i className="bi bi-cart-plus"></i> Ecommerce App
            </div>
            <div class="card-body">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link className='text-warning' to={'/'}>Home</Link>
            </div>
            <div class="card-footer text-light">
                Copyright &copy; 2025
            </div>
        </div>
    )
}

export default Footer