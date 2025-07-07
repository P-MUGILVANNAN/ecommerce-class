import React from 'react';
import caro1 from '../assets/caro 1.jpg';
import caro2 from '../assets/caro 2.jpg';
import caro3 from '../assets/caro 3.jpg';

function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={caro1} class="d-block w-100" height={'450px'} alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={caro2} class="d-block w-100" height={'450px'} alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={caro3} class="d-block w-100" height={'450px'} alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel