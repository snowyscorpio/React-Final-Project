import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images//LogoFlowerShop.png';
import rose from '../assets/images//Roses.jpg';
import tulip from '../assets/images//Tulip.jpg';
import lily from '../assets/images//Lily.jpg';
import Peony from '../assets/images/Peony.jpg';
import Cerry_Blossom from '../assets/images//Cerry_Blossom.jpg';

function Home() {
  const bouquets = [
    {
      id: 1,
      name: 'Rose Bouquet',
      image: rose,
      description: 'A classic bouquet of fresh pink roses.',
      detailedDescription: `
      This stunning bouquet features premium-quality pink roses, celebrated for their delicate beauty and enchanting fragrance. Roses symbolize love and appreciation, making this bouquet perfect for romantic gestures or special celebrations.

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
      description: 'A wonderful bouquet of fresh light pink tulips.',
      detailedDescription: `
      Tulips are one of the most cheerful and vibrant flowers, symbolizing deep love and perfect happiness. This bouquet brings a touch of spring to any space with its elegant pink petals and graceful stems.

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
      description: 'Beautifully arranged white lilies.',
      detailedDescription: `
      Lilies exude elegance and grace with their large, fragrant blooms. They symbolize purity, renewal, and refined beauty, making them ideal for weddings and formal occasions.

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
      description: 'Soft and romantic pink peonies.',
      detailedDescription: `
      Peonies are cherished for their lush, full blooms and romantic charm. Known as the flower of riches and honor, they are often used in bouquets for anniversaries or heartfelt celebrations.

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
      description: 'A delicate arrangement of cherry blossoms.',
      detailedDescription: `
      Cherry blossoms are iconic symbols of renewal and fleeting beauty. Their delicate pink flowers add an air of tranquility and elegance to any space, making them ideal for contemplative or celebratory settings.

      **Care Instructions:** 
      - Place cherry blossom branches in warm water with a floral preservative.
      - Mist the flowers daily to keep them hydrated.
      - Avoid placing branches in direct sunlight, as blossoms may wilt faster.

      **Replanting:** 
      Cherry blossoms are not replanted from cut branches, but seeds or saplings can be grown into beautiful trees. Ensure the saplings are planted in nutrient-rich, well-draining soil, and water them regularly during their early growth stages.
    `,
      price: '$45',
    },
  ];



  return (
    <div className="main">

      <div className="title">
        <img src={logo} alt="store's logo" className="logo" />
        <h1>MOON's FLOWER SHOP</h1>
      </div>
      <h4 className="names">by LOREN RACHEL CHEZRONY  and  SALEH KHATIB</h4>

      <div className="body">
        {bouquets.map(bouquet => (
          <div key={bouquet.id} className="article-card">
            <img
              src={bouquet.image}
              alt={bouquet.name}
              className="article-image"
            />
            <div className="article-content">
              <h2 className="article-title">{bouquet.name}</h2>
              <p className="article-description">{bouquet.description}</p>
              <p className="article-price">{bouquet.price}</p>
              <Link
                to={`/post/${bouquet.id}`}
                state={{ post: bouquet }}
                className="view-button"
              >
                View Flower
              </Link>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Home;
