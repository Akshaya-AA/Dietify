import React, { useState } from 'react';
import bf1 from './images/l black bean taco.jpg';
import bf2 from './images/l cauliflower fried rice.jpg';
import bf3 from './images/l chicken wrap.webp';
import bf4 from './images/l lentil soup.jpg';
import bf5 from './images/l quino salad.jpg';
import bf6 from './images/l sushi bowl.jpg';
import bf7 from './images/l turky burger.jpg';
import bf8 from './images/l veggiestir fry.jpg';
import bf9 from './images/l cauliflower fried rice.jpg';
import { FaShoppingBag, FaStar, FaTimes, FaTrashAlt } from 'react-icons/fa';



function LunchPage() {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const lunchItems = [
        { title: 'Beef Tacos', price: '$9.99', image: bf1, description: 'Black bean tacos served with fresh vegetables and spicy salsa.', rating: 4 },
        { title: 'Cauliflower Fried Rice', price: '$8.99', image: bf2, description: 'Low-carb cauliflower fried rice with mixed vegetables.', rating: 5 },
        { title: 'Chicken Wrap', price: '$12.99', image: bf3, description: 'Grilled chicken wrap with fresh veggies and creamy dressing.', rating: 4 },
        { title: 'Lentil Soup', price: '$10.49', image: bf4, description: 'Hearty lentil soup with aromatic spices and herbs.', rating: 3 },
        { title: 'Quinoa Salad', price: '$7.99', image: bf5, description: 'Healthy quinoa salad with a mix of fresh greens and nuts.', rating: 5 },
        { title: 'Sushi Bowl', price: '$6.99', image: bf6, description: 'Deconstructed sushi bowl with rice, avocado, and fish.', rating: 4 },
        { title: 'Turkey Burger', price: '$8.49', image: bf7, description: 'Juicy turkey burger served with crispy lettuce and tomato.', rating: 5 },
        { title: 'Vegetable Stir Fry', price: '$7.99', image: bf8, description: 'Fresh vegetable stir fry with a tangy sauce.', rating: 4 },
        { title: 'Cauliflower Fried Rice', price: '$8.99', image: bf9, description: 'Low-carb cauliflower fried rice with mixed vegetables.', rating: 5 }
    ];

    
      const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.title === item.title);
        if (existingItem) {
          setCartItems(cartItems.map(cartItem =>
            cartItem.title === item.title
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ));
        } else {
          setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
      };
    
      const removeFromCart = (item) => {
        setCartItems(cartItems.filter(cartItem => cartItem.title !== item.title));
      };
    
      const updateQuantity = (item, quantity) => {
        if (quantity === 0) {
          removeFromCart(item);
        } else {
          setCartItems(cartItems.map(cartItem =>
            cartItem.title === item.title
              ? { ...cartItem, quantity }
              : cartItem
          ));
        }
      };
    
      const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2);
      };
    
      return (
        <div className="breakfast-page">
          <h1>Lunch Menu</h1>
          <div className="product-grid">
            {lunchItems.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-container">
                  <img src={item.image} alt={item.title} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-description">{item.description}</p>
                  <p className="product-price">{item.price}</p>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={i < item.rating ? '#FFD700' : '#ddd'} />
                    ))}
                  </div>
                  <button className="order-button" onClick={() => addToCart(item)}>
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
    
          <div className="fixed-bag-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
            <FaShoppingBag />
            {cartItems.length > 0 && <span className="notification-badge">{cartItems.length}</span>}
          </div>
    
          {isCartOpen && (
            <div className="cart-popup">
              <div className="cart-popup-header">
                <h3>Your Cart</h3>
                <button className="close-cart-button" onClick={() => setIsCartOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              {cartItems.length > 0 ? (
                <div className="cart-items">
                  {cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                      <div className="cart-item-info">
                        <div className="cart-item-left">
                          <h4 className="cart-item-title">{item.title}</h4>
                          <p className="cart-item-price">1X{item.price} = ${parseFloat(item.price.slice(1)) * item.quantity}</p>
                          <div className="cart-item-quantity">
                            <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                          </div>
                        </div>
                        <div className="cart-item-right">
                          <img src={item.image} alt={item.title} className="cart-item-image" />
                        </div>
                      </div>
                      <div className="cart-item-rating">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color={i < item.rating ? '#60FF42' : '#ddd'} />
                        ))}
                      </div>
                      <button className="remove-button" onClick={() => removeFromCart(item)}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                  <div className="cart-total">
                    <h3>Total: ${getTotalPrice()}</h3>
                  </div>
                  <div className="cart-buttons">
                    <button className="cart-button">View Cart</button>
                    <button className="cart-button">Checkout</button>
                  </div>
                </div>
              ) : (
                <p>Your cart is empty!</p>
              )}
            </div>
          )}
    
          <style>
            {`
            .breakfast-page {
              text-align: center;
              margin: 40px 0;
              padding: 0 20px;
            }
    
            h1 {
              font-size: 2rem;
              margin-bottom: 40px;
              color: #333;
              font-weight: bold;
            }
    
            .product-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 20px;
            }
    
            .product-card {
              background-color: transparent;
              border: none;
              box-shadow: none;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              padding: 15px;
              justify-content: center;
              transition: transform 0.3s ease-in-out;
            }
    
            .product-card:hover {
              transform: scale(1.05);
            }
    
            .product-image-container {
              width: 100%;
              height: 250px;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            .product-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;
            }
    
            .product-image:hover {
              transform: scale(1.1);
            }
    
            .product-info {
              padding: 15px;
              text-align: center;
            }
    
            .product-title {
              font-size: 1.6rem;
              color: #333;
              margin-bottom: 15px;
            }
    
            .product-description {
              font-size: 1.1rem;
              color: #666;
              margin-bottom: 15px;
            }
    
            .product-price {
              font-size: 1.4rem;
              color: #333;
              margin-bottom: 10px;
            }
    
            .product-rating {
              margin-bottom: 15px;
            }
    
            .order-button {
              background-color: #60FF42;
              color: white;
              border: none;
              padding: 12px 25px;
              font-size: 1.1rem;
              cursor: pointer;
              border-radius: 8px;
              transition: background-color 0.3s ease;
            }
    
            .order-button:hover {
              background-color: #50e839;
              transform: scale(1.05);
            }
    
            .fixed-bag-icon {
              position: fixed;
              bottom: 20px;
              right: 20px;
              font-size: 3rem;
              color: #FF5722;
              background: white;
              border-radius: 50%;
              padding: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            .notification-badge {
              position: absolute;
              top: 5px;
              right: 5px;
              background-color: red;
              color: white;
              font-size: 0.8rem;
              border-radius: 50%;
              padding: 5px 10px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            .cart-popup {
              position: fixed;
              top: 0;
              right: 0;
              width: 320px;
              height: 100%;
              background-color: white;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              z-index: 9999;
              padding: 20px;
              overflow-y: auto;
            }
    
            .cart-popup-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
            }
    
            .close-cart-button {
              background-color: transparent;
              border: none;
              font-size: 1.5rem;
              cursor: pointer;
            }
    
            .cart-item-info {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
            }
    
            .cart-item-left {
              flex: 1;
              text-align: left;
            }
    
            .cart-item-right {
              display: flex;
              justify-content: flex-end;
            }
    
            .cart-item-title {
              font-size: 1.1rem;
              font-weight: bold;
            }
    
            .cart-item-image {
              width: 60px;
              height: 60px;
              object-fit: cover;
            }
    
            .cart-item-rating {
              margin-top: 5px;
            }
    
            .cart-item-price {
              font-size: 1rem;
              color: #333;
            }
    
            .cart-item-quantity {
              font-size: 1rem;
              display: flex;
              align-items: center;
              margin: 0; /* Reduced space here */
            }
    
            .cart-item-quantity button {
              padding: 5px;
              font-size: 1rem;
              cursor: pointer;
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: white;
            }
    
            .remove-button {
              background-color: transparent;
              border: none;
              padding: 5px;
              cursor: pointer;
            }
    
            .cart-total {
              font-size: 1.3rem;
              margin-top: 15px;
              font-weight: bold;
              color: #333;
            }
    
            .cart-buttons {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 20px;
            }
    
            .cart-button {
              background-color: #444;
              color: white;
              padding: 12px;
              font-size: 1rem;
              border: none;
              cursor: pointer;
              border-radius: 30px;
              text-align: center;
            }
    
            .cart-button:hover {
              background-color: #333;
            }
            `}
          </style>
        </div>
      );
    }
    
    export default LunchPage;
    
