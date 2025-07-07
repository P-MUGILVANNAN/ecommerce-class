import React from 'react'

function Contact() {
  return (
    <div className='container my-3'>
      <h2 className="text-primary text-center"><i className="bi bi-phone"></i> Contact Us</h2>
      <div className="row">
        <div className="col-md-6 offset-3">
            <form action="">
              <p>Enter Name: <input type="text" className='form-control' placeholder='Enter Name' /></p>
              <p>Enter Email: <input type="email" className='form-control' placeholder='Enter Email' /></p>
              <p>Message: <textarea name="" id="" className='form-control'></textarea></p>
              <p className="text-center">
                <button className="btn btn-primary">Contact</button>
              </p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact