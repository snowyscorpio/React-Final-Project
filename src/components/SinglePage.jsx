import React from 'react';
import { useLocation } from 'react-router-dom';

function SinglePage() {
  const location = useLocation();
  const bouquet = location.state?.post; // Extract bouquet data

  if (!bouquet) {
    return <h2>Bouquet not found</h2>; // Handle case if data is missing
  }

  return (
    <section className="post-main">
      <div className="container">
        <div className="single-post">
          <div className="upper-part-post">
            <h1 className="post-title">{bouquet.name}</h1>
            <img src={bouquet.image} alt={bouquet.name} className="post-image" />
            <p className="post-price">{bouquet.price}</p>
          </div>
          <div className="info-part-post">
            <p className="post-detailed-description">{bouquet.detailedDescription}</p>
                        </div>
            <div className="button-container">
              <button className="buy-button">Buy Me</button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
