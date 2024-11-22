import { Link } from 'react-router-dom'
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div >
        <h2>Animes</h2>
      </div>
      <div >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produto">Produtos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </div>
      <div>
        <h2>Meios de pagamento:</h2>
      </div>
      <div className={styles.pagamento}>
        <ol>
          <li><img src="/imagens/visa.png" alt="Visa" /></li>
          <li><img src="/imagens/mastercard.png" alt="Mastercard" /></li>
          <li><img src="/imagens/amex.png" alt="American Express" /></li>
          <li><img src="/imagens/diners.png" alt="Diners Club" /></li>
          <li><img src="/imagens/aura.png" alt="Aura" /></li>
          <li><img src="/imagens/elo.png" alt="Elo" /></li>
          <li><img src="/imagens/hipercard.png" alt="Hipercard" /></li>
          <li><img src="/imagens/mercadopago.png" alt="Mercado Pago" /></li>
          <li><img src="/imagens/discover.png" alt="Discover" /></li>
          <li><img src="/imagens/boleto.png" alt="Boleto" /></li>
          <li><img src="/imagens/pix.png" alt="Pix" /></li>
        </ol>
      </div>
      <div>
        <h2>Meios de envio:</h2>
      </div>
      <div className={styles.envio}>
        <img src="/imagens/correios.png" alt="Correios" />
      </div>
    </footer>
  );
};

export default Footer;
