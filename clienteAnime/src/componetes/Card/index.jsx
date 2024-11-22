import React from 'react';
import { Link } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";
import { BsArrowRight } from 'react-icons/bs';
import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({ produto, onAddToCart }) {
  return (
    <section className={styles.card}>
      <div className={styles.animeT}>
        <h3>{produto.name}</h3>
      </div>
      <img src={produto.image} alt={produto.name} className={styles.image} />
      <div className={styles.card_footer}>
        <Link onClick={() => onAddToCart(produto)} className={styles.botao1}>
          <IoAddOutline/>
        </Link>
        {/* Link para a página de detalhes do produto */}
        <Link to={`/informacao/${produto.id}`} className={styles.botao2}>
          <BsArrowRight/>
        </Link>
      </div>
    </section>
  );
}

export default Card;
