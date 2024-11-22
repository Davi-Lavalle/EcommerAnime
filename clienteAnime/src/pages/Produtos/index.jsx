import React, { useEffect, useState } from 'react';
import Card from '../../componetes/Card';
import axios from 'axios';
import { useCart } from '../../context';
import Header from '../../componetes/Header';
import Navigation from '../../componetes/Navigation';
import Footer from '../../componetes/Footer';
import Container from '../../componetes/Container';
import styles from './Produto.module.css';

const Produtos = ({ produtos = [] }) => {
  const { addToCart } = useCart();
  const [produtoList, setProdutoList] = useState(produtos);
  const [filteredProducts, setFilteredProducts] = useState(produtos);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  // Fetch produtos
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/produtos');
        setProdutoList(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Erro ao carregar os Produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  // Handle category filter
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    filterProducts(selectedCategory, priceRange);
  };

  // Handle price filter
  const handlePriceChange = (e) => {
    const selectedPrice = e.target.value;
    setPriceRange(selectedPrice);
    filterProducts(category, selectedPrice);
  };

  // Filter products based on category and price
  const filterProducts = (category, priceRange) => {
    let filtered = produtoList;

    if (category) {
      filtered = filtered.filter((produto) => produto.category === category);
    }

    if (priceRange) {
      filtered = filtered.filter((produto) => {
        const price = parseFloat(produto.price);
        if (priceRange === 'low') return price < 50;
        if (priceRange === 'medium') return price >= 50 && price <= 200;
        if (priceRange === 'high') return price > 200;
        return true;
      });
    }

    setFilteredProducts(filtered);
  };

  if (produtoList.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <>
      <Header />
      <Navigation />
      <Container>
        <div className={styles.filterContainer}>
          <select value={category} onChange={handleCategoryChange} className={styles.select}>
            <option value="">Todas as Categorias</option>
            <option value="Mangá" className={styles.option}>Mangá</option>
            <option value="Action Figure" className={styles.option}>Action Figure</option>
            <option value="Cosplay" className={styles.option}>Cosplay</option>
            <option value="Outros" className={styles.option}>Outros</option>
          </select>

          <select value={priceRange} onChange={handlePriceChange} className={styles.select}>
            <option value="">Todos os Preços</option>
            <option value="low" className={styles.option}>Menos de R$50</option>
            <option value="medium" className={styles.option}>R$50 - R$200</option>
            <option value="high" className={styles.option}>Mais de R$200</option>
          </select>
        </div>

        <div className={styles.cardContainer}>
          {filteredProducts.map((produto) => (
            <Card key={produto.id} produto={produto} onAddToCart={addToCart} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Produtos;
