import { CartProvider } from './context';
import AppRoutes from './routes'
import './App.css' 


function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}


export default App
