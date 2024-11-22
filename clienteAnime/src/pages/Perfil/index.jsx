import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../componetes/Header";
import Navigation from "../../componetes/Navigation";
import Container from "../../componetes/Container";
import Footer from "../../componetes/Footer";
import styles from './Perfil.module.css'

const Perfil = () => {
  const [perfil, setPerfil] = useState(null); // Armazena os dados do perfil
  const [loading, setLoading] = useState(true); // Controle de loading
  const [error, setError] = useState(null); // Para exibir erro, se necessário

  useEffect(() => {
    const fetchPerfil = async () => {
      const token = localStorage.getItem('token'); // Obtém o token armazenado

      if (!token) {
        setError('Token não encontrado. Por favor, faça login.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/perfil', {
          headers: {
            Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
          },
        });
        setPerfil(response.data); // Armazena os dados do perfil
      } catch (err) {
        console.error('Erro ao buscar dados do perfil:', err);
        setError('Erro ao carregar dados do perfil.');
      } finally {
        setLoading(false); // Desativa o carregamento após a requisição
      }
    };

    fetchPerfil();
  }, []);

  return (
    <>
      <Header />
      <Navigation />
      <Container>
        <section className={styles.perfil}>
          {loading && <p>Carregando...</p>}
          {error && <p>{error}</p>}
          {perfil && (
            <div >
              <h2>Perfil</h2>
              <ul>
                <li><strong>Nome:</strong> {perfil.username}</li>
                <li><strong>Email:</strong> {perfil.email}</li>
                <li><strong>Papel:</strong> {perfil.role}</li>
              </ul>
            </div>
        )}
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Perfil;
