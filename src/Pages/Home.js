.import React from 'react';
import { Carousel } from 'react-bootstrap';
import c1 from './images/carousel image2.webp';
import c2 from './images/carousel image1.webp';
import c3 from './images/carousel image3.webp';
import c4 from './images/carousel image4.webp';
import c5 from './images/carousel image5.webp';
import c6 from './images/vegan image.webp';
import c7 from './images/paleo image.jpg';
import c8 from './images/mediterranean image.jpg';
import c9 from './images/glutenfree image.jpg';
import c10 from './images/keto image.jpg';

const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel className="mt-3" interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={c1} alt="First slide" />
          <Carousel.Caption className="carousel-caption text-center">
            <h1 className="carousel-title">WELCOME TO DIETIFY</h1>
            <p className="carousel-subtitle">Nourish Your Body, Energize Your Life</p>
            <div className="carousel-buttons">
              <button className="btn btn-light me-3">Explore</button>
              <button className="btn btn-dark">View More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={c2} alt="Second slide" />
          <Carousel.Caption className="carousel-caption text-center">
            <h1 className="carousel-title">WELCOME TO DIETIFY</h1>
            <p className="carousel-subtitle">Nourish Your Body, Energize Your Life</p>
            <div className="carousel-buttons">
              <button className="btn btn-light me-3">Explore</button>
              <button className="btn btn-dark">View More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={c3} alt="Third slide" />
          <Carousel.Caption className="carousel-caption text-center">
            <h1 className="carousel-title">WELCOME TO DIETIFY</h1>
            <p className="carousel-subtitle">Nourish Your Body, Energize Your Life</p>
            <div className="carousel-buttons">
              <button className="btn btn-light me-3">Explore</button>
              <button className="btn btn-dark">View More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={c4} alt="Fourth slide" />
          <Carousel.Caption className="carousel-caption text-center">
            <h1 className="carousel-title">WELCOME TO DIETIFY</h1>
            <p className="carousel-subtitle">Nourish Your Body, Energize Your Life</p>
            <div className="carousel-buttons">
              <button className="btn btn-light me-3">Explore</button>
              <button className="btn btn-dark">View More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={c5} alt="Fifth slide" />
          <Carousel.Caption className="carousel-caption text-center">
            <h1 className="carousel-title">WELCOME TO DIETIFY</h1>
            <p className="carousel-subtitle">Nourish Your Body, Energize Your Life</p>
            <div className="carousel-buttons">
              <button className="btn btn-light me-3">Explore</button>
              <button className="btn btn-dark">View More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Choose Your Diet Section */}
      <h1 className="choose-diet-heading text-center">Choose Your Diet Plan</h1>

      <div className="card-row">
        <div className="card">
          <img src={c6} alt="Vegan Diet" className="card-img" />
          <div className="card-hover">
            <p className="diet-name">Vegan Diet</p>
          </div>
        </div>
        <div className="card">
          <img src={c7} alt="Paleo Diet" className="card-img" />
          <div className="card-hover">
            <p className="diet-name">Paleo Diet</p>
          </div>
        </div>
        <div className="card">
          <img src={c8} alt="Mediterranean Diet" className="card-img" />
          <div className="card-hover">
            <p className="diet-name">Mediterranean Diet</p>
          </div>
        </div>
        <div className="card">
          <img src={c9} alt="Glutenfree Diet" className="card-img" />
          <div className="card-hover">
            <p className="diet-name">Glutenfree Diet</p>
          </div>
        </div>
        <div className="card">
          <img src={c10} alt="Keto Diet" className="card-img" />
          <div className="card-hover">
            <p className="diet-name">Keto Diet</p>
          </div>
        </div>
      </div>

      <div className="view-more-container text-center">
        <button className="view-recipe-btn mb-5">View More Details</button>
      </div>

      <style>
        {`
          /* General Carousel Image Styling */
          .carousel-img {
            object-fit: cover;
            height: 600px;
          }

          /* Carousel Caption Styling */
          .carousel-caption {
            position: absolute;
            bottom: 20%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: white;
            padding: 20px;
            background: none;
            width: 100%;
          }

          /* Choose Your Diet Section Styling */
          .card-row {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            padding: 20px;
          }

          .card {
            position: relative;
            width: 18%;
            height: 250px;
            overflow: hidden;
            cursor: pointer;
            border-radius: 10px;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }

          .card-hover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 1.5rem;
            transition: opacity 0.3s;
            border-radius: 10px;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }

          .card:hover .card-hover {
            opacity: 1;
          }

          .view-recipe-btn {
            background-color: #60FF42;
            border: none;
            color: white;
            padding: 12px 20px;
            font-size: 1.1rem;
            cursor: pointer;
            border-radius: 5px;
            animation: glittering 1.5s infinite;
          }

          /* Glittering Animation */
          @keyframes glittering {
            0% { background-color: #60FF42; }
            50% { background-color: #60FF42; }
            100% { background-color: #60FF42; }
          }

          .diet-name {
            font-size: 1.3rem;
            font-weight: bold;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .carousel-title {
                font-size: 2rem;
            }

            .card-row {
                flex-direction: column;
                align-items: center;
            }

            .card {
                width: 100%;
                height: 250px;
                margin-bottom: 20px;
            }

            .choose-diet-heading {
                font-size: 2rem;
            }
          }

          @media (max-width: 480px) {
            .carousel-title {
                font-size: 1.5rem;
            }

            .carousel-subtitle {
                font-size: 1rem;
            }

            .view-recipe-btn {
                padding: 8px 15px;
            }

            .diet-name {
                font-size: 1.2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
