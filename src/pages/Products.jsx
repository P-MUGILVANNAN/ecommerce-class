import React from 'react';
import shoe1 from '../assets/shoe1.jpeg';
import shoe2 from '../assets/shoe2.jpeg';
import shoe3 from '../assets/shoe3.jpg';
import shoe4 from '../assets/shoe4.jpeg';
import shoe5 from '../assets/shoe5.jpg';
import shoe6 from '../assets/shoe6.jpg';

function Products() {
  const products = [
    {
      id : 1,
      productName: 'Nike Shoe',
      color: 'red',
      sizes: '7, 8, 9, 10',
      oldPrice: 4999,
      newPrice: 4499,
      productImage: shoe1
    },
    {
      id : 2,
      productName: 'Nike Shoe',
      color: 'red',
      sizes: '7, 8, 9, 10',
      oldPrice: 4999,
      newPrice: 4499,
      productImage: shoe2
    },
    {
      id : 3,
      productName: 'Nike Shoe',
      color: 'red',
      sizes: '7, 8, 9, 10',
      oldPrice: 4999,
      newPrice: 4499,
      productImage: shoe3
    },
    {
      id : 4,
      productName: 'Nike Shoe',
      color: 'red',
      sizes: '7, 8, 9, 10',
      oldPrice: 4999,
      newPrice: 4499,
      productImage: shoe4
    },
    {
      id : 5,
      productName: 'Nike Shoe',
      color: 'red',
      sizes: '7, 8, 9, 10',
      oldPrice: 4999,
      newPrice: 4499,
      productImage: shoe5
    },
    {
      id : 6,
      productName: 'Nike Shoe',
      color: 'red',
      sizes: '7, 8, 9, 10',
      oldPrice: 4999,
      newPrice: 4499,
      productImage: shoe6
    },
  ]
  return (
    <div className='container my-3'>
      <h2 className='text-primary text-center'><i className="bi bi-fire"></i> Products</h2>
      <div className="row row-gap-5">
        {
          products.map((product, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div class="card" style={{ width: '18rem' }}>
                  <img src={product.productImage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <a class="card-title">{product.productName}</a>
                    <p class="card-text">Color : {product.color}</p>
                    <p class="card-text">Sizes : {product.sizes}</p>
                    <p class="card-text text-decoration-line-through text-danger">Old Price: ₹{product.oldPrice}</p>
                    <p class="card-text">New Price: ₹{product.newPrice}</p>
                    <a href="#" class="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products