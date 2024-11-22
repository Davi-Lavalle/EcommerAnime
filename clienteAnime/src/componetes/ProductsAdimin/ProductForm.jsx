import React, { useState } from 'react';
import axios from 'axios';
import styles from './ProductsAdimin.module.css'

const ProductForm = ({ onProductAdded }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleProductForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/produtos', { image, name, description, price, quantity, category });
      setImage('');
      setName('');
      setDescription('');
      setPrice('');
      setQuantity('');
      setCategory('');
      onProductAdded();
      

    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <div className={styles.form}>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleProductForm}>
      <input
          type="text"
          placeholder="Imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder={price === '' ? 'Preço' : ''}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder={quantity === '' ? 'Quantidade' : ''}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ color: category === "" ? '#757575' : 'black' }}  required>
          <option value="" disabled hidden >Categoria</option>
          <option value="Mangá" className={styles.option}>Mangá</option>
          <option value="Action Figure"className={styles.option}>Action Figure</option>
          <option value="Cosplay" className={styles.option}>Cosplay</option>
          <option value="Outros" className={styles.option}>Outros</option>

        </select>
        
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default ProductForm;
