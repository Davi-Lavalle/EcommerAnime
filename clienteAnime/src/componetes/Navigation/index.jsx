import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

function Navigation() {
    return(
        <nav className={styles.navigation}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produto">Produtos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )  
}
export default Navigation
