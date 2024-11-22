const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido. Por favor, faça o login.' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'secreta', (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Token inválido ou expirado. Por favor, faça login novamente.' });
      }

      // Verifica se `decoded` possui `id` e `role`
      if (!decoded.id || !decoded.role) {
        return res.status(403).json({ error: 'Token malformado. Falta de informações de usuário.' });
      }

      // Verifica o papel do usuário (se for exigido pela rota)
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Acesso negado: permissão insuficiente.' });
      }

      // Armazena as informações do usuário no `req` para uso nas próximas rotas
      req.user = decoded;
      next();
    });
  };
};

module.exports = authMiddleware;
