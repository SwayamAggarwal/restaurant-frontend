import React from 'react'
import './Food.css' // You'll need to create this CSS file

const Food = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Our Authentic Indian Menu</h1>
        <p>Experience the rich flavors of India with our carefully crafted dishes</p>
      </div>

      <div className="menu-section">
        <h2>Appetizers</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="item-name">Vegetable Samosa</div>
            <div className="item-price">₹120</div>
            <div className="item-description">Crispy pastry filled with spiced potatoes and peas</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Paneer Tikka</div>
            <div className="item-price">₹180</div>
            <div className="item-description">Marinated cottage cheese cubes grilled in clay oven</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Onion Bhaji</div>
            <div className="item-price">₹90</div>
            <div className="item-description">Crispy onion fritters with chickpea flour</div>
          </div>
        </div>
      </div>

      <div className="menu-section">
        <h2>Main Course</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="item-name">Butter Chicken</div>
            <div className="item-price">₹250</div>
            <div className="item-description">Tender chicken in a rich tomato and butter gravy</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Palak Paneer</div>
            <div className="item-price">₹220</div>
            <div className="item-description">Cottage cheese cubes in a creamy spinach sauce</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Chana Masala</div>
            <div className="item-price">₹180</div>
            <div className="item-description">Chickpeas cooked with onions, tomatoes and spices</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Dal Makhani</div>
            <div className="item-price">₹190</div>
            <div className="item-description">Black lentils simmered overnight with cream and spices</div>
          </div>
        </div>
      </div>

      <div className="menu-section">
        <h2>Breads & Rice</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="item-name">Naan</div>
            <div className="item-price">₹40</div>
            <div className="item-description">Leavened bread baked in clay oven</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Garlic Naan</div>
            <div className="item-price">₹60</div>
            <div className="item-description">Naan bread topped with garlic and butter</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Jeera Rice</div>
            <div className="item-price">₹120</div>
            <div className="item-description">Basmati rice tempered with cumin seeds</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Biryani</div>
            <div className="item-price">₹220</div>
            <div className="item-description">Aromatic basmati rice cooked with vegetables and spices</div>
          </div>
        </div>
      </div>

      <div className="menu-section">
        <h2>Desserts</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="item-name">Gulab Jamun</div>
            <div className="item-price">₹80</div>
            <div className="item-description">Deep-fried milk solids soaked in sugar syrup</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Rasmalai</div>
            <div className="item-price">₹90</div>
            <div className="item-description">Soft cottage cheese patties in sweetened, thickened milk</div>
          </div>
          <div className="menu-item">
            <div className="item-name">Kheer</div>
            <div className="item-price">₹70</div>
            <div className="item-description">Rice pudding with cardamom and dry fruits</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food