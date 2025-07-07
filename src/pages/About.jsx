import React from 'react';
import aboutimg from '../assets/aboutus.webp';

function About() {
  return (
    <div className='container my-3'>
      <h2 className="text-primary text-center"><i class="bi bi-question-circle"></i> About Us</h2>
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <img src={aboutimg} className='img-fluid' alt="" />
        </div>
        <div className="col-12 col-md-6 text-center">
          <p className='fst-italic'>Ecommerce has become an essential part of the shopping experience, and it’s here to stay. By 2025, global retail ecommerce sales will surpass $4.3 trillion, and in the US, B2B ecommerce is on track to more than double from $1.7 trillion in 2021 to over $3 trillion by 2027.
            From big-box retailers to niche suppliers, businesses of all types are going digital — and fast. With the growing volume of online purchases, brands have more opportunities than ever to expand their customer base and deliver seamless, personalized shopping experiences.
            But what exactly is ecommerce?
            Short for “electronic commerce,” ecommerce refers to the buying and selling of goods and services over the internet. This includes everything from product drops on social media and mobile app orders to complex B2B transactions through digital platforms.</p>
        </div>
      </div>
    </div>
  )
}

export default About