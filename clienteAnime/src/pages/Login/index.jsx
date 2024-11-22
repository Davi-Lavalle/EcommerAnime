import React, { useState } from 'react';
import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token, role } = response.data;
      
      // Armazenar o token no localStorage
      localStorage.setItem('token', token);

      // Redirecionar o usuário dependendo do papel
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <article className={styles.login}>
      <section>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
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
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div>
          <Link to="/cadastrar" className={styles.link}>Cadastrar-se</Link>
        </div>
      </section>
    </article>
  );
}

export default Login;
