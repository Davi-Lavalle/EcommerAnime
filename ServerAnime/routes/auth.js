const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/cadastro', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verificar se o email já está em uso
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    // Definir papel com base no domínio do e-mail
    const role = email.endsWith('@anime.com.br') ? 'admin' : 'user';

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o novo usuário
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});

// Rota para login de usuário
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    // Gerar um token JWT
    const token = jwt.sign({ id: user.id, role: user.role }, 'secreta', { expiresIn: '1h' });

    res.json({ token, role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

// Nova Rota para obter o perfil do usuário logado
router.get('/perfil', authMiddleware(), async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['username', 'email', 'role'], // Defina os campos que deseja retornar
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter perfil do usuário' });
  }
});

module.exports = router;
