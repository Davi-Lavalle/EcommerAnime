import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductsAdimin.module.css'

const ProductList = ({ onEdit, onDelete, onDetail}) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    loadProducts();
  }, []);


  const loadProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/produtos');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao carregar os Produtos:', error);
    }
  };

  return (
    <div className={styles.form}>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img className={styles.imagelist} src={product.image} alt="" /> {product.name} - {product.description} - R$ {product.price} - {product.quantity}  - {product.category}
            <div className="button-group">
            <button onClick={() => onDetail(product.id)}>Detalhes</button>
            <button className='edit' onClick={() => onEdit(product)}>Editar</button>
            <button className='delete' onClick={() => onDelete(product.id)}>Excluir</button>
            </div>
            
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ProductList;
