import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../componetes/Header';
import Navigation from '../../componetes/Navigation';
import Footer from '../../componetes/Footer';
import Container from '../../componetes/Container';
import styles from './informacao.module.css';

const Informacoes = () => {
  const { id } = useParams(); // Captura o ID do produto da URL
  const [produto, setProduto] = useState(null);
  const navigate = useNavigate();

  // Função para buscar detalhes do produto
  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/produtos/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao carregar o produto:', error);
      }
    };

    fetchProduto();
  }, [id]);

  if (!produto) {
    return <p>Carregando detalhes do produto...</p>;
  }

  return (
    <>
      <Header />
      <Navigation />
      <Container>
        <section className={styles.Informacao}>
          <h1>Detalhes do Produto</h1>
          <ul>
            <li><img className={styles.imageDetalhes} src={produto.image} alt={produto.name} /></li>
            <li><strong>Nome:</strong> {produto.name}</li>
            <li><strong>Descrição:</strong> {produto.description}</li>
            <li><strong>Preço:</strong> R$ {produto.price}</li>
            <li><strong>Quantidade:</strong> {produto.quantity}</li>
            <li><strong>Categoria:</strong> {produto.category}</li>
          </ul>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Informacoes;
