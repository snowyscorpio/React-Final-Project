import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from './Title';

function EditPost() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post || { name: '', description: '', detailedDescription: '', instruction: '', price: '', type: '' };

  const [editedItem, setEditedItem] = useState(post);

  useEffect(() => {
    console.log('EditPost component mounted');
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (file) {
        setEditedItem((prev) => ({
          ...prev,
          image: URL.createObjectURL(file),
        }));
      }
    } else {
      setEditedItem((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedItem.type) {
      alert('Please select an item type (Bouquet or Houseplant)');
      return;
    }

    console.log('Edited item:', editedItem);
    alert('Item edited successfully!');

    navigate('/');
  };

  return (
    <div className="main">
      <Title />
      <h2 className="edit-item-title">Edit Item</h2>
      <div className="edit-item-container">
        <form onSubmit={handleSubmit} className="edit-item-form">
          <input type="text" name="name" value={editedItem.name} onChange={handleChange} required />
          <input type="text" name="description" value={editedItem.description} onChange={handleChange} required />
          <textarea name="detailedDescription" value={editedItem.detailedDescription} onChange={handleChange} required />
          <textarea name="instruction" value={editedItem.instruction} onChange={handleChange} required />
          <input type="text" name="price" value={editedItem.price} onChange={handleChange} required />
          <div className="file-input-container">
            <input type="file" name="image" accept="image/*" onChange={handleChange} className="file-input" />
            {editedItem.image && <img src={editedItem.image} alt="Preview" className="image-preview" />}
          </div>


          <p className="choose-item-type-p">Choose Item's Type</p>
          <div className="choose-item-type">
            <label>
              <input type="radio" name="type" value="bouquet" checked={editedItem.type === 'bouquet'} onChange={handleChange} required /> Bouquet
            </label>
            <label>
              <input type="radio" name="type" value="houseplant" checked={editedItem.type === 'houseplant'} onChange={handleChange} required /> Houseplant
            </label>
          </div>

          <button type="submit" >Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
