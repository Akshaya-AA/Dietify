.import React from 'react';
import { FaStar } from 'react-icons/fa';

import foodImage1 from './images/carousel image1.webp';
import foodImage2 from './images/d roasted chicken.webp';
import foodImage3 from './images/p l roasted salmon with greens.jpg';
import teamMember1 from './images/person1.jpeg';
import teamMember2 from './images/person2.jpeg';
import teamMember3 from './images/person3.jpeg';
import customer1 from './images/customer review2.jpeg';
import customer2 from './images/customer review1.jpeg';
import customer3 from './images/customer review3.jpeg';

function About() {
  return (
    <div className="about-us-page">
      <h1 className="section-heading" style={{ color: '#60FF42' }}>About Us</h1>

      <div className="section-container fadeIn">
        <div className="section-title" style={{ color: '#60FF42' }}>Our Story</div>
        <div className="section-content">
          <p>
            Dietify started with a simple idea: to provide healthy and delicious food options for everyone.
            We believe that food should nourish both the body and soul, and that eating well can be enjoyable and easy.
          </p>
        </div>
      </div>

      <div className="section-container fadeIn">
        <div className="section-title" style={{ color: '#60FF42' }}>Our Mission</div>
        <div className="section-content">
          <p>
            Our mission is to make healthy eating more accessible and enjoyable. We want to inspire people to
            make better food choices without sacrificing flavor or satisfaction.
          </p>
        </div>
      </div>

      <div className="section-container fadeIn">
        <div className="two-column">
          <div className="left-column">
            <img src={foodImage1} alt="Diet Food" className="section-image" />
          </div>
          <div className="right-column">
            <p>
              Our meals are designed to provide balanced nutrition with fresh, quality ingredients. From gluten-free
              options to plant-based meals, we cater to all dietary needs. Our food is flavorful and packed with essential nutrients.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container fadeIn">
        <div className="two-column">
          <div className="left-column">
            <p>
              Dietify was founded to fill a gap in the food industry—delicious, healthy meals that people actually
              enjoy eating. We wanted to create an alternative to fast food and processed snacks with nutritious
              options that are both convenient and satisfying.
            </p>
          </div>
          <div className="right-column">
            <img src={foodImage2} alt="Why Dietify" className="section-image" />
          </div>
        </div>
      </div>

      <div className="section-container fadeIn">
        <div className="section-title" style={{ color: '#60FF42' }}>Meet Our Team</div>
        <div className="team-cards">
          <div className="team-card">
            <img src={teamMember1} alt="Team Member 1" className="team-image" />
            <p>John Doe - Founder</p>
            <p>John is passionate about healthy living and is the driving force behind Dietify.</p>
          </div>
          <div className="team-card">
            <img src={teamMember2} alt="Team Member 2" className="team-image" />
            <p>Jane Smith - Nutritionist</p>
            <p>Jane ensures our meals are nutritionally balanced and meet all dietary requirements.</p>
          </div>
          <div className="team-card">
            <img src={teamMember3} alt="Team Member 3" className="team-image" />
            <p>Michael Johnson - Chef</p>
            <p>Michael creates delicious and innovative recipes that focus on health and taste.</p>
          </div>
        </div>
      </div>

      <div className="section-container fadeIn">
        <div className="section-title" style={{ color: '#60FF42' }}>Customer Reviews</div>
        <div className="review-cards">
          <div className="review-card">
            <div className="review-image-container">
              <img src={customer1} alt="Customer 1" className="review-image" />
            </div>
            <div className="review-content">
              <p>"The food was amazing! I loved how fresh everything tasted, and I felt great afterward."</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => <FaStar key={i} color="#FFD700" />)}
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-image-container">
              <img src={customer2} alt="Customer 2" className="review-image" />
            </div>
            <div className="review-content">
              <p>"I’ve never had such delicious healthy food. Dietify has truly changed how I eat!"</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => <FaStar key={i} color="#FFD700" />)}
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-image-container">
              <img src={customer3} alt="Customer 3" className="review-image" />
            </div>
            <div className="review-content">
              <p>"Absolutely love Dietify! The food is both nutritious and tasty."</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => <FaStar key={i} color="#FFD700" />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .about-us-page {
            padding: 40px;
            font-family: Arial, sans-serif;
          }

          .section-heading {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 40px;
            color: #333;
          }

          .section-container {
            margin-bottom: 60px;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 20px;
            text-align: center;
            color: #333;
          }

          .section-content {
            font-size: 1.2rem;
            text-align: center;
            color: #666;
          }

          .two-column {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }

          .left-column, .right-column {
            width: 48%;
            margin-bottom: 20px;
          }

          .section-image {
            width: 100%;
            max-width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            transition: transform 0.3s ease-in-out;
          }

          .section-image:hover {
            transform: scale(1.05);
          }

          .team-cards {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            flex-wrap: wrap;
          }

          .team-card {
            width: 30%;
            text-align: center;
            background: #f7f7f7;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .team-card:hover {
            transform: scale(1.05);
          }

          .team-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 20px;
          }

          .review-cards {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            flex-wrap: wrap;
          }

          .review-card {
            width: 30%;
            background: #f7f7f7;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .review-card:hover {
            transform: scale(1.05);
          }

          .review-image-container {
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
          }

          .review-image {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 50%;
          }

          .review-content {
            font-size: 1.1rem;
            color: #444;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .rating {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }

          .fadeIn {
            animation: fadeIn 1s ease-in;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .two-column {
              flex-direction: column;
              align-items: center;
            }

            .left-column, .right-column {
              width: 100%;
              text-align: center;
            }

            .team-card {
              width: 100%;
              margin-bottom: 20px;
            }

            .review-card {
              width: 100%;
              margin-bottom: 20px;
            }

            .review-cards {
              flex-direction: column;
              align-items: center;
            }
          }

          @media (max-width: 480px) {
            .section-heading {
              font-size: 2rem;
            }

            .section-content {
              font-size: 1rem;
            }

            .team-image {
              width: 120px;
              height: 120px;
            }

            .review-image {
              width: 100px;
              height: 100px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;
