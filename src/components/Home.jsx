import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';
import BouquetCard from './BouquetCard';
import PlantCard from './PlantCard';

function Home() {
  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState('');
  const isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
      return next();  // If the user is an administrator, move on to the next handler
    }
    return res.status(403).send('You do not have permission to perform this operation.');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('products')
      .then(res => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDelete = (post) => {
    if (window.confirm(`Are you sure you want to delete post: ${post.title}`)) {
      axios.delete(`/products/${post.id}`)
        .then(res => {
          setItems(items.filter(item => item.id !== post.id));
          setMsg('Post was deleted');
          window.alert(msg);
        })
        .catch(error => {
          console.error('Error deleting post:', error);
        });
    }
  };

  return (
    <div className="main">
      <Title />

      <div className="container">
        <h2 className="all-products">All Products</h2>

        <div className="nav-links-container">
          <nav className="nav-links">
            <a href="#bouquets">Bouquets</a>
            <a href="#houseplants">Houseplants</a>
          </nav>
        </div>

        <div className="all-products-container">
          {isAdmin && (
            <div className="add-item-button-container">
              <Link to="/createpost" className="add-item-button">Add New Products</Link>
            </div>
          )}

          <BouquetCard items={items} isAdmin={isAdmin} handleDelete={handleDelete} />
          <PlantCard items={items} isAdmin={isAdmin} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Home;
