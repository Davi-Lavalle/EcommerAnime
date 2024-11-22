import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastrar.module.css'
import axios from 'axios';

function Cadastrar(){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/cadastro', {
        username,
        email,
        password,
      });
      navigate('/login'); // Redirecionar para a página de login após o cadastro
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao cadastrar');
    }
  };

    return(
        <>
        <article className={styles.cadastrar}>
        <section>
        <div>
          <h1>Cadastrar</h1>
          <form onSubmit={handleRegister}>
          <div>
            <label>Nome de Usuário:</label><br />
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
      </section>
      
    </article>
        </>
    )
}

export default Cadastrar