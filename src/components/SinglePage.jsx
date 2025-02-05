import React from 'react';
import { useLocation } from 'react-router-dom';

function SinglePage() {
  const location = useLocation();
  const post = location.state?.post;

  if (!post) {
    return <h2 className="error-message">Item not found</h2>;
  }

  return (
    <section className="post-main">
      <div className="container">
        <div className="single-post">
          <h1 className="post-title">{post.name}</h1>

          <div className="upper-part-post">
            <img src={post.image} alt={post.name} className="post-image" />
            <p className="post-price"><strong>Price:</strong> {post.price}</p>
          </div>

          <div className="info-part-post">
            <h2 className="section-subtitle">Description</h2>
            <p className="post-detailed-description">{post.detailedDescription}</p>
          </div>

          <div className="info-part-post">
            <h2 className="section-subtitle">Care Instructions</h2>
            <p className="post-flower-instruction">{post.instruction}</p>
          </div>

          <div className="button-container">
            <button className="buy-button">Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
