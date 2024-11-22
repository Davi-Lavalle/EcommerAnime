import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductsAdimin.module.css'


const ProductDetail = ({ productId, onProductDetail  }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    DetailProducts();
  }, [productId]);

  const DetailProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/produtos/${productId}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao carregar os Produtos:', error);
    }
  };

  return (
    <div className={styles.form}>
      <h2>Detalhes do Produto</h2>
      <ul>
        <li><img className={styles.imageDetalhes} src={products.image} alt="" /></li>
        <li>Nome: {products.name}</li>
        <li>Descrição: {products.description}</li>
        <li>Preço: R$ {products.price}</li>
        <li>Quantidade:{products.quantity}</li>
        <li>Categoria:{products.category}</li>
        <button onClick={() => onProductDetail()}>Voltar</button>

      </ul>
    </div>
  );
};

export default ProductDetail;
