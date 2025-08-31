import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faLeaf, 
  faDrumstickBite, 
  faAppleAlt, 
  faIceCream, 
  faCarrot, 
  faPhone, 
  faHome, 
  faInfoCircle 
} from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MyImage from './images/logo.png';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#24E500' }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={MyImage}
              alt="Bowl Food Logo"
              className="me-2"
              style={{ width: '30px', height: '30px' }}
            />
            DIETIFY
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="recipesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Diet Menu <FontAwesomeIcon icon={faUtensils} />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="recipesDropdown"
                  style={{
                    backgroundColor: '#24E500',
                  }}
                >
                  <li>
                    <Link className="dropdown-item" to="/breakfast" style={{ color: 'black' }}>
                      Breakfast <FontAwesomeIcon icon={faCarrot} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/lunch" style={{ color: 'black' }}>
                      Lunch <FontAwesomeIcon icon={faDrumstickBite} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dinner" style={{ color: 'black' }}>
                      Dinner <FontAwesomeIcon icon={faUtensils} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/snacks" style={{ color: 'black' }}>
                      Snacks <FontAwesomeIcon icon={faAppleAlt} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/desserts" style={{ color: 'black' }}>
                      Desserts <FontAwesomeIcon icon={faIceCream} />
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dietPlansDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Diet Plans <FontAwesomeIcon icon={faLeaf} />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dietPlansDropdown"
                  style={{
                    backgroundColor: '#24E500',
                  }}
                >
                  <li>
                    <Link className="dropdown-item" to="/vegan" style={{ color: 'black' }}>
                      Vegan <FontAwesomeIcon icon={faLeaf} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/keto" style={{ color: 'black' }}>
                      Keto <FontAwesomeIcon icon={faDrumstickBite} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mediterranean" style={{ color: 'black' }}>
                      Mediterranean <FontAwesomeIcon icon={faUtensils} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/paleo" style={{ color: 'black' }}>
                      Paleo <FontAwesomeIcon icon={faCarrot} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/glutenfree" style={{ color: 'black' }}>
                      Gluten-Free <FontAwesomeIcon icon={faAppleAlt} />
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact <FontAwesomeIcon icon={faPhone} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          {/* About Us Block */}
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We are committed to helping you live a healthier life. Our goal is to provide you with easy-to-follow diet plans and delicious recipes that will nourish your body and energize your life.
            </p>
          </div>

          {/* Quick Links Block */}
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Diet Plans</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Block */}
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@dietify.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Newsletter Block */}
          <div className="footer-section newsletter">
            <h2>Subscribe to Our Newsletter</h2>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section with Social Icons */}
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
          <p>&copy; 2024 Dietify. All Rights Reserved.</p>
        </div>
      </footer>

    <style>{`
        .footer {
          background-color: #333;
          color: white;
          padding: 20px 0;
          font-family: Arial, sans-serif;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          padding: 0 15px;
          flex-wrap: wrap;
        }

        .footer-section {
          flex: 1;
          min-width: 200px;
          margin: 10px;
        }

        .footer-section h2 {
          margin-bottom: 10px;
          font-size: 1.2rem;
          color: #60ff42;
        }

        .footer-section p {
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .footer-section a {
          color: #f4f4f4;
          text-decoration: none;
          font-size: 0.9rem;
          display: block;
          margin: 3px 0;
        }

        .footer-section a:hover {
          color: #60ff42;
        }

        .footer-section form {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .footer-section input {
          padding: 6px;
          font-size: 0.9rem;
          width: 150px;
          border: none;
          border-radius: 5px;
        }

        .footer-section button {
          padding: 8px 12px;
          background-color: #60ff42;
          color: black;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        .footer-section button:hover {
          background-color: #50e839;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 20px;
        }

        .social-icons {
          margin-bottom: 5px;
        }

        .social-icon {
          color: white;
          font-size: 1.3rem;
          margin: 0 5px;
        }

        .social-icon:hover {
          color: #60ff42;
        }

        .footer-bottom p {
          font-size: 0.8rem;
          color: #ddd;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
          }

          .footer-section {
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
          }

          .social-icons {
            display: flex;
            justify-content: center;
          }

          .footer-section.newsletter form {
            flex-direction: column;
          }

          .footer-section.newsletter input {
            width: 80%;
            margin-bottom: 10px;
            font-size: 0.8rem;
          }

          .footer-section.newsletter button {
            width: 80%;
            font-size: 0.8rem;
            padding: 6px;
          }
        }

        /* Dropdown Hover Effect */
        .nav-item.dropdown:hover .dropdown-menu {
          display: block;
          background-color: #50e839; /* Updated color */
        }
      `}</style>
    </div>
  );
};

export default Layout;
