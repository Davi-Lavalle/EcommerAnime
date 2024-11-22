import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductsAdimin.module.css'

const editProdutos = ({ product, onProductUpdated }) => {
  const [image, setImage] = useState(product.image);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [category, setCategory] = useState(product.category);

  useEffect(() => {
    setImage(product.image)
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setQuantity(product.quantity);
    setCategory(product.category);  

  }, [product]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/admin/produtos/${product.id}`, { image, name, description, price, quantity, category});
      onProductUpdated();
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  return (
    <div className={styles.form}>
      <h2>Editar Produto</h2>
      <form onSubmit={handleUpdateProduct}>
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
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
         <input
          type="number"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled hidden>Categoria</option>
          <option value="Mangá" className='option'>Mangá</option>
          <option value="Action Figure"className='option'>Action Figure</option>
          <option value="Cosplay" className='option'>Cosplay</option>
          <option value="Outros" className='option'>Outros</option>

        </select>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default editProdutos;
