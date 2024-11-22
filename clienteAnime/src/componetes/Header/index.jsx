import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import Logout from "../../componetes/logout";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado de visibilidade do menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logotipo */}
      <div>
        <Link to="/">
          <img src="/imagens/anime_logo.png" alt="Logotipo" />
        </Link>
      </div>

      {/* Barra de pesquisa */}
      <div className={styles.pesquisa}>
        <IoIosSearch className={styles.busca} />
        <input type="search" placeholder="Pesquisar" />
      </div>

      {/* Links e ícones */}
      <div>
        <ul>
          {/* Ícone do Carrinho */}
          <li className={styles.cart}>
            <Link to="/carrinho">
              <FaCartShopping className={styles.cartIcon} />
            </Link>
          </li>

          {/* Menu Dropdown do perfil */}
          <li className={styles.dropmenu} onClick={toggleDropdown}>
            <CgProfile className={styles.perfil} />
            <ul className={styles.droplist} style={{ display: isOpen ? 'block' : 'none' }}>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/cadastrar">Cadastrar</Link></li>
              <li><Link to="/perfil">Perfil</Link></li>
              <li><Logout /></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
