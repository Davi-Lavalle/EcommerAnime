import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'
import Cadastrar from './pages/Cadastrar'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Perfil from './pages/Perfil'
import Page404 from './pages/Page404'
import Carrinho from './pages/Carrinho'
import Informacoes from './pages/informacao'
import PrivateRoute from './componetes/PrivateRoute'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/produto" element={<Produtos/>} ></Route>
                <Route path="/contato" element={<Contato/>} ></Route>
                <Route path="/informacao/:id" element={<Informacoes />} ></Route>
                <Route path="/login" element={<Login/>} ></Route>
                <Route path="/cadastrar" element={<Cadastrar/>} ></Route>
                <Route path="/carrinho" element={<Carrinho/>} ></Route>

                <Route element={<PrivateRoute roles={['admin']} />}>
                    <Route path="/admin" element={<Admin />} />
                </Route>

                <Route element={<PrivateRoute roles={['user', 'admin']} />}>
                    <Route path="/perfil" element={<Perfil />} />
                </Route>

                <Route path="*" element={<Page404/>} ></Route>

            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes
