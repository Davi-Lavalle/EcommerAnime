import React, { useState } from 'react';
import Header from '../../componetes/Header';
import Navigation from '../../componetes/Navigation';
import Footer from '../../componetes/Footer';
import Container from '../../componetes/Container';
import styles from './contato.module.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <Navigation />
      <Container>
        <div className={styles.contatoContainer}>
          <h1 className={styles.contatoHeader}>Entre em Contato</h1>
          {isSubmitted ? (
            <p className={styles.successMessage}>Mensagem enviada com sucesso!</p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contatoForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Enviar</button>
            </form>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Contato;
