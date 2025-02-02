import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import rose from '../assets/images/Roses.jpg';
import tulip from '../assets/images/Tulip.jpg';
import lily from '../assets/images/Lily.jpg';
import Peony from '../assets/images/Peony.jpg';
import Cerry_Blossom from '../assets/images/Cerry_Blossom.jpg';
import monstera from '../assets/images/Monstera Deliciosa.jpg';
import pothos from '../assets/images/Pothos.jpg';
import snakePlant from '../assets/images/Snake Plant.jpg';
import zzPlant from '../assets/images/ZZ Plant.jpg';

function Home() {
  const [items, setItems] = useState({
    bouquets: [
      {
        id: 1,
        name: 'Rose Bouquet',
        image: rose,
        description: 'A classic and timeless bouquet of fresh pink roses, perfect for expressing love and admiration.',
        detailedDescription: 'This stunning bouquet features premium-quality pink roses, celebrated for their delicate beauty and enchanting fragrance. Roses symbolize love and appreciation, making this bouquet perfect for romantic gestures or special celebrations.',
        instruction: `
**Care Instructions:** 
  - Trim the stems at a 45-degree angle every two days to ensure better water absorption.
  - Replace the water daily, ensuring it is clean and fresh.
  - Keep the bouquet in a cool area, away from direct sunlight or drafts.

**Replanting:** 
  While cut roses cannot be replanted, you can propagate roses by taking a healthy stem and planting it in moist soil. Cover it with a plastic bottle to maintain humidity until roots develop, typically after 4–6 weeks.
  `,
        price: '$25',
      },
      {
        id: 2,
        name: 'Tulip Delight',
        image: tulip,
        description: 'A delightful bouquet of vibrant light pink tulips, perfect for brightening any room or occasion.',
        detailedDescription: 'Tulips are one of the most cheerful and vibrant flowers, symbolizing deep love and perfect happiness. This bouquet brings a touch of spring to any space with its elegant pink petals and graceful stems.',
        instruction: `
**Care Instructions:** 
  - Trim stems diagonally before placing the tulips in a tall vase with cool water.
  - Add a teaspoon of sugar to the water to extend their freshness.
  - Tulips naturally bend toward light, so rotate the vase daily to maintain an even display.

**Replanting:** 
  Tulip bulbs can be replanted! After the flowers wilt, allow the leaves to yellow before removing the bulbs. Dry them and store them in a cool, dark place until the next planting season.
  `,
        price: '$30',
      },
      {
        id: 3,
        name: 'Elegant Lily Bouquet',
        image: lily,
        description: 'An elegant arrangement of pure white lilies, perfect for creating a sophisticated and serene atmosphere.',
        detailedDescription: 'Lilies exude elegance and grace with their large, fragrant blooms. They symbolize purity, renewal, and refined beauty, making them ideal for weddings and formal occasions.',
        instruction: `
**Care Instructions:** 
  - Remove pollen stains from petals to prevent discoloration.
  - Change the water every two days and use flower food for prolonged freshness.
  - Keep the lilies away from pets, as they are toxic to cats and dogs.

**Replanting:** 
  Lilies grow from bulbs, and while cut lilies cannot be replanted, the bulbs from a living plant can be reused. Store the bulbs in a cool area during dormancy and replant in well-drained soil for a stunning bloom next season.
  `,
        price: '$35',
      },
      {
        id: 4,
        name: 'Peony Perfection',
        image: Peony,
        description: 'A lush bouquet of soft, romantic pink peonies, perfect for adding elegance and charm to any celebration.',
        detailedDescription: ' Peonies are cherished for their lush, full blooms and romantic charm. Known as the flower of riches and honor, they are often used in bouquets for anniversaries or heartfelt celebrations.',
        instruction: `
**Care Instructions:** 
  - Remove any leaves that fall below the waterline to prevent bacterial growth.
  - Change the water every day and cut stems diagonally to improve hydration.
  - Store in a cool environment to maximize the bloom time.

**Replanting:** 
  Peonies are perennials that grow from tuberous roots. While cut peonies cannot be replanted, if you purchase a live plant with roots, ensure it’s planted in a sunny spot with well-drained soil to thrive for years.
  `,
        price: '$40',
      },
      {
        id: 5,
        name: 'Cherry Blossom Charm',
        image: Cerry_Blossom,
        description: 'A graceful arrangement of delicate cherry blossoms, perfect for bringing tranquility and beauty to your space.',
        detailedDescription: 'Cherry blossoms are iconic symbols of renewal and fleeting beauty.Their delicate pink flowers add an air of tranquility and elegance to any space, making them ideal for contemplative or celebratory settings.',
        instruction: `
**Care Instructions:** 
  - Place cherry blossom branches in warm water with a floral preservative.
  - Mist the flowers daily to keep them hydrated.
  - Avoid placing branches in direct sunlight, as blossoms may wilt faster.

**Replanting:** 
  Cherry blossoms are not replanted from cut branches, but seeds or saplings can be grown into beautiful trees. Ensure the saplings are planted in nutrient-rich, well-draining soil, and water them regularly during their early growth stages.`,
        price: '$45',
      },

    ],
    houseplants: [
      {
        id: 6,
        name: "Monstera Deliciosa",
        image: monstera,
        description: "A popular houseplant with stunning split leaves, adding a tropical vibe to any space.",
        detailedDescription: "Monstera Deliciosa, also known as the Swiss Cheese Plant, thrives in indirect light and high humidity.",
        instruction: `**Care Instructions:** 
      - Place in bright, indirect sunlight.
      - Water when the top inch of soil is dry.
      - Wipe leaves with a damp cloth to remove dust.`,
        price: "$50",
      },
      {
        id: 7,
        name: "Pothos",
        image: pothos,
        description: "An easy-care, trailing plant that purifies the air and thrives in low light conditions.",
        detailedDescription: "Pothos is easy to maintain and can survive in various lighting conditions.",
        instruction: `**Care Instructions:** 
      - Water when soil feels dry.
      - Can tolerate low to bright indirect light.
      - Trim vines to encourage bushy growth.`,
        price: "$20",
      },
      {
        id: 8,
        name: "Snake Plant",
        image: snakePlant,
        description: "A hardy, air-purifying plant that thrives on neglect, perfect for beginners.",
        detailedDescription: "Snake Plant is resilient and can survive in low light with minimal watering.",
        instruction: `**Care Instructions:** 
      - Water only when the soil is completely dry.
      - Prefers indirect sunlight but can tolerate low light.`,
        price: "$35",
      },
      {
        id: 9,
        name: "ZZ Plant",
        image: zzPlant,
        description: "A low-maintenance, drought-resistant plant perfect for busy plant lovers.",
        detailedDescription: "The ZZ Plant thrives on minimal care, making it ideal for beginners or busy lifestyles.",
        instruction: `**Care Instructions:** 
      - Water once every 2 - 3 weeks.
      - Tolerates low light but grows best in indirect sunlight.`,
        price: "$40",
      },
    ],
  });

  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    detailedDescription: '',
    instruction: ``,
    price: '',
    image: null, 
    type: 'bouquet',
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (file) {
        setNewItem({ ...newItem, image: URL.createObjectURL(file) });
      }
    } else {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prevState) => ({
      ...prevState,
      [newItem.type === 'bouquet' ? 'bouquets' : 'houseplants']: [
        ...prevState[newItem.type === 'bouquet' ? 'bouquets' : 'houseplants'],
        { ...newItem, id: prevState.bouquets.length + prevState.houseplants.length + 1 },
      ],
    }));
    setNewItem({ name: '', description: '', detailedDescription: '', instruction: ``, price: '', image: null, type: 'bouquet' });
  };

  return (
    <div className="main">
      <Title />

      <div className="nav-links-container">
        <nav className="nav-links">
          <a href="#bouquets">Bouquets</a>
          <a href="#houseplants">Houseplants</a>
        </nav>
      </div>
      <div className="add-item-section">
        <h2>Add a New Item</h2>
        <div className="add-item-container">
          <form onSubmit={handleSubmit} className="add-item-form">
            <input type="text" name="name" placeholder="Name" value={newItem.name} onChange={handleChange} required />
            <input type="text" name="description" placeholder="Description" value={newItem.description} onChange={handleChange} required />
            <textarea name="detailedDescription" placeholder="Detailed Description" value={newItem.detailedDescription} onChange={handleChange} required />
            <textarea name="instruction" placeholder="Care Instructions" value={newItem.instruction} onChange={handleChange} required />
            <input type="text" name="price" placeholder="Price" value={newItem.price} onChange={handleChange} required />
            <input type="file" name="image" accept="image/*" onChange={handleChange} required className="file-input" />
            {newItem.image && <img src={newItem.image} alt="Preview" className="image-preview" />}
            <div className="choose-item-type">
              <label>
                <input type="radio" name="type" value="bouquet" checked={newItem.type === 'bouquet'} onChange={handleChange} /> Bouquet
              </label>
              <label>
                <input type="radio" name="type" value="houseplant" checked={newItem.type === 'houseplant'} onChange={handleChange} /> Houseplant
              </label>
            </div>
            <button type="submit">Add Item</button>
          </form>
        </div>
      </div>

      
      {/* Bouquets Section */}
      <div id="bouquets" className="bouquets-section">
        <h2 className="section-title">Flower Bouquets</h2>
        <div className="articles-wrap">
          {items.bouquets.map((bouquet) => (
            <div key={bouquet.id} className="article-card">
              <img src={bouquet.image} alt={bouquet.name} className="article-image" />
              <div className="article-content">
                <h2 className="article-title">{bouquet.name}</h2>
                <p className="article-description">{bouquet.description}</p>
                <p className="article-price">{bouquet.price}</p>
                <Link to={`/post/${bouquet.id}`} state={{ post: bouquet }} className="view-button">View Flower</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Houseplants Section */}
      <div id="houseplants" className="houseplants-section">
        <h2 className="section-title">Houseplants</h2>
        <div className="articles-wrap">
          {items.houseplants.map((plant) => (
            <div key={plant.id} className="article-card">
              <img src={plant.image} alt={plant.name} className="article-image" />
              <div className="article-content">
                <h2 className="article-title">{plant.name}</h2>
                <p className="article-description">{plant.description}</p>
                <p className="article-price">{plant.price}</p>
                <Link to={`/post/${plant.id}`} state={{ post: plant }} className="view-button">View Plant</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
