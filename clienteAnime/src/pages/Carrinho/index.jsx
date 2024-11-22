import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import Header from '../../componetes/Header';
import Navigation from '../../componetes/Navigation';
import Footer from '../../componetes/Footer';
import Container from '../../componetes/Container';
import axios from 'axios';
import styles from './carrinho.module.css';

const Carrinho = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/carrinho/orders",
        { items: cartItems, total },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      clearCart();
      alert("Pedido realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao realizar pedido:", error);
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <Container>
        <div className={styles.carrinhoContainer}>
          <h1 className={styles.carrinhoHeader}>Carrinho</h1>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <>
              <ul className={styles.carrinhoList}>
                {cartItems.map((item) => (
                  <li key={item.id} className={styles.carrinhoItem}>
                    {item.name} - R$ {item.price}
                    <Link
                      to="#"
                      className={styles.removeLink}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remover
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className={styles.carrinhoTotal}>Total: R$ {total}</h2>
            </>
          )}
          <Link onClick={handleCheckout} className={styles.carrinhoLink}>
            Finalizar Compra
          </Link>
          <Link onClick={clearCart} className={styles.clearLink}>
            Limpar Carrinho
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Carrinho;
