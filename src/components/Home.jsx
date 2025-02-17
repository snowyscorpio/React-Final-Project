import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
  const [items, setItems] = useState([
    // Bouquets
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
      price: '✦ - $25 - ✦',
      type: 'bouquet',
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
      price: '✦ - $30 - ✦',
      type: 'bouquet',
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
      price: '✦ - $35 - ✦',
      type: 'bouquet',
    },
    {
      id: 4,
      name: 'Peony Perfection',
      image: Peony,
      description: 'A lush bouquet of soft, romantic pink peonies, perfect for adding elegance and charm to any celebration.',
      price: '✦ - $40 - ✦',
      type: 'bouquet',
    },
    {
      id: 5,
      name: 'Cherry Blossom Charm',
      image: Cerry_Blossom,
      description: 'A graceful arrangement of delicate cherry blossoms, perfect for bringing tranquility and beauty to your space.',
      price: '✦ - $45 - ✦',
      type: 'bouquet',
    },

    // Houseplants
    {
      id: 6,
      name: "Monstera Deliciosa",
      image: monstera,
      description: "A popular houseplant with stunning split leaves, adding a tropical vibe to any space.",
      detailedDescription: "Monstera Deliciosa, also known as the Swiss Cheese Plant, is a striking tropical houseplant recognized for its large, glossy, perforated leaves. Native to the rainforests of Central America, this plant thrives in warm, humid environments and can grow impressively large when given the right conditions. Its aerial roots help it climb and support its growth, making it a fantastic addition to indoor jungles. The Monstera is not just visually appealing; it also helps improve air quality by filtering toxins from the environment. While it is relatively low maintenance, providing proper care ensures lush and vibrant foliage.",
      instruction: `
**Care Instructions:** 
  - Place in bright, indirect sunlight. Avoid direct sunlight as it can scorch the leaves.
  - Water thoroughly when the top inch of soil feels dry. Overwatering can lead to root rot, so ensure proper drainage.
  - Maintain humidity by misting the leaves occasionally or placing a humidifier nearby.
  - Wipe leaves with a damp cloth to remove dust and enhance photosynthesis.
  - Rotate the plant occasionally to promote even growth and prevent it from leaning toward one direction.
  - If the plant gets too large, consider pruning back excess growth and using stakes or a moss pole for support.

**Replanting:** 
  - Monstera can be propagated through stem cuttings. Cut just below an aerial root node, place in water until roots form, and then transfer to soil.
  - When repotting, choose a pot slightly larger than the current one with good drainage to accommodate its growing root system.
    `,
      price: "✦ - $50 - ✦",
      type: 'houseplant',
    },
    {
      id: 7,
      name: "Pothos",
      image: pothos,
      description: "An easy-care, trailing plant that purifies the air and thrives in low light conditions.",
      detailedDescription: "Pothos, also known as Devil’s Ivy, is a resilient and fast-growing trailing plant, ideal for both beginners and seasoned plant owners. Its heart-shaped leaves come in a variety of shades, from solid green to variegated patterns of white, yellow, and light green. This plant is known for its air-purifying qualities, effectively removing toxins from the surrounding environment. It is highly adaptable and can thrive in a variety of conditions, making it one of the easiest plants to care for. Whether placed in a hanging pot or trained to climb, Pothos adds a refreshing and lively touch to any home or office.",
      instruction: `
**Care Instructions:** 
  - Water when the soil feels dry to the touch. Pothos is forgiving and can tolerate occasional drought.
  - Thrives in low to bright indirect light, making it a great choice for rooms with limited sunlight.
  - Avoid direct sunlight, as it can scorch the leaves and cause them to lose their vibrant color.
  - To promote bushy growth, trim the vines regularly. Cuttings can be propagated easily in water and transferred to soil once roots develop.
  - Clean the leaves occasionally with a damp cloth to remove dust and allow better light absorption.

**Replanting:** 
  - Pothos is one of the easiest plants to propagate. Simply cut a stem below a node, place it in water, and wait for roots to develop.
  - When repotting, use well-draining soil and a pot with drainage holes to prevent water retention.
  - Pothos can also be trained to grow along a trellis or wall for a decorative effect.
    `,
      price: "✦ - $20 - ✦",
      type: 'houseplant',
    },
    {
      id: 8,
      name: "Snake Plant",
      image: snakePlant,
      description: "A hardy, air-purifying plant that thrives on neglect, perfect for beginners.",
      detailedDescription: "The Snake Plant, also known as Sansevieria or Mother-in-Law’s Tongue, is a highly durable and resilient houseplant that can thrive under minimal care. Its upright, sword-like leaves feature striking green and yellow variegation, making it a stylish and modern addition to any space. This plant is renowned for its air-purifying abilities, as it efficiently filters toxins such as formaldehyde, benzene, and xylene from the air. Snake plants are particularly suited for bedrooms as they release oxygen at night, improving air quality. With its tolerance for neglect and low-light conditions, the Snake Plant is an excellent choice for busy individuals or those new to plant care.",
      instruction: `
**Care Instructions:** 
  - Water only when the soil is completely dry, as the plant is highly susceptible to root rot.
  - Prefers indirect sunlight but can also tolerate low-light environments, making it perfect for offices and dim rooms.
  - Avoid overwatering; it is better to underwater than overwater.
  - During winter months, reduce watering even further, as the plant enters a dormant phase.
  - Wipe the leaves with a soft, damp cloth occasionally to remove dust and maintain their glossy appearance.
  - Snake plants grow slowly but can be repotted every couple of years if the roots outgrow the pot.

**Replanting:** 
  - Snake plants can be propagated through leaf cuttings or by dividing the root rhizomes.
  - When repotting, use a well-draining potting mix, preferably a cactus or succulent blend.
  - Choose a pot with drainage holes to prevent water accumulation.
    `,
      price: "✦ - $35 - ✦",
      type: 'houseplant',
    },
    {
      id: 9,
      name: "ZZ Plant",
      image: zzPlant,
      description: "A low-maintenance, drought-resistant plant perfect for busy plant lovers.",
      detailedDescription: "The ZZ Plant (Zamioculcas zamiifolia) is a robust and virtually indestructible houseplant known for its waxy, deep green leaves and its ability to thrive in low-light conditions. It is a slow-growing plant that requires minimal attention, making it a popular choice for homes and offices. The ZZ Plant is highly drought-tolerant due to its rhizome-based root system, which stores water for extended periods. Additionally, it is known for its air-purifying properties, effectively removing airborne toxins. With its stylish, upright foliage and low-maintenance nature, the ZZ Plant is an excellent option for those seeking a hassle-free yet elegant houseplant.",
      instruction: `
**Care Instructions:** 
  - Water sparingly, only when the soil is completely dry. Overwatering can lead to root rot.
  - Tolerates low light but grows best in bright, indirect sunlight.
  - Avoid placing in direct sunlight, as intense light can scorch the leaves.
  - This plant thrives in average room humidity and does not require frequent misting.
  - Clean the leaves occasionally with a damp cloth to maintain their shine and remove dust.
  - If the plant starts leaning, rotate it occasionally to ensure even growth.

**Replanting:** 
  - The ZZ Plant can be propagated by dividing the rhizomes or using leaf cuttings.
  - When repotting, use a well-draining potting mix to prevent excess moisture retention.
  - Since ZZ Plants grow slowly, repotting is only necessary every few years or when the roots have outgrown their container.
    `,
      price: "✦ - $40 - ✦",
      type: 'houseplant',
    },
  ]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('article')
      .then(res => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  useEffect(() => {
    console.log('Items state updated:', items);
  }, [items]);



  return (
    <div className="main">
      <Title />



      <div >
        <div>
          <h2 className="all-products">All Products</h2>
        </div>


        <div className="nav-links-container">
          <nav className="nav-links">
            <a href="#bouquets">Bouquets</a>
            <a href="#houseplants">Houseplants</a>
          </nav>
        </div>
        <div className="all-products-container">
          <div className="add-item-button-container">
            <Link to="/createpost" className="add-item-button">Add New Products</Link>
          </div>

          <div>
            {/* Bouquets Section */}
            <div id="bouquets" className="bouquets-section">
              <p className="section-title">Flower Bouquets</p>
              <div className="articles-wrap">
                {items.filter(item => item.type === 'bouquet').map((bouquet) => (
                  <div key={bouquet.id} className="article-card">
                    <img src={bouquet.image} alt={bouquet.name} className="article-image" />
                    <div className="article-content">
                      <h2 className="article-title">{bouquet.name}</h2>
                      <p className="article-description">{bouquet.description}</p>
                      <p className="article-price">{bouquet.price}</p>
                      <Link to={`/post/${bouquet.id}`} state={{ post: bouquet }} className="view-button">View Flower</Link>
                      <Link
                        to={`/editpost/${bouquet.id}`}
                        state={{ post: bouquet }}
                        className="edit-button"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Houseplants Section */}
            <div id="houseplants" className="houseplants-section">
              <p className="section-title">Houseplants</p>
              <div className="articles-wrap">
                {items.filter(item => item.type === 'houseplant').map((plant) => (
                  <div key={plant.id} className="article-card">
                    <img src={plant.image} alt={plant.name} className="article-image" />
                    <div className="article-content">
                      <h2 className="article-title">{plant.name}</h2>
                      <p className="article-description">{plant.description}</p>
                      <p className="article-price">{plant.price}</p>
                      <Link to={`/post/${plant.id}`} state={{ post: plant }} className="view-button">View Plant</Link>
                      <Link
                        to={`/editpost/${plant.id}`}
                        state={{ post: plant }}
                        className="edit-button"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
