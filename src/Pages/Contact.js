.import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    food: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.address) formErrors.address = "Address is required";

    if (!formData.food) formErrors.food = "Please select a food option";

    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", address: "", food: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contact-page mt-3 mb-3">
      <div className="form-wrapper">
        <h2 style={{color: '#60FF42'}}>Contact Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="food">Select Food</label>
                <select
                  id="food"
                  name="food"
                  value={formData.food}
                  onChange={handleChange}
                  className={errors.food ? "error" : ""}
                >
                  <option value="">-- Select a food --</option>
                  <option value="salad">Salad</option>
                  <option value="chicken">Grilled Chicken</option>
                  <option value="salmon">Grilled Salmon</option>
                  <option value="tofu">Tofu Stir-Fry</option>
                  <option value="quinoa">Quinoa Bowl</option>
                  <option value="smoothie">Green Smoothie</option>
                  <option value="avocado">Avocado Toast</option>
                  <option value="oatmeal">Oatmeal</option>
                  <option value="eggs">Scrambled Eggs</option>
                  <option value="veggies">Steamed Vegetables</option>
                </select>
                {errors.food && <span className="error-message">{errors.food}</span>}
              </div>
            </div>

            <div className="form-column">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className={errors.address ? "error" : ""}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="message-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      <style>
        {`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f3f4f6; 
}

.form-wrapper {
  background: #ffffff; 
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 800px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333; 
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.form-column {
  width: 48%;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #555; 
}

.form-group .message-label {
  font-size: 16px; 
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #4caf50; 
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px; 
  font-size: 16px; 
}

.error {
  border-color: #dc3545; 
  background-color: rgba(255, 0, 0, 0.1);
}

.error-message {
  color: #dc3545;
  font-size: 12px;
  margin-top: 5px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #60FF42;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #60FF42; 
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }

  .form-column {
    width: 100%;
  }

  .form-wrapper {
    padding: 20px;
  }

  .submit-button {
    padding: 14px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .form-wrapper {
    padding: 15px;
  }

  h2 {
    font-size: 20px;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    font-size: 16px;
    padding: 14px;
  }
}
        `}
      </style>
    </div>
  );
};

export default Contact;
