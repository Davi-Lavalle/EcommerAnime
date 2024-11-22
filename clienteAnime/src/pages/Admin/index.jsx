import Header from  "../../componetes/Header";
import Navigation from  "../../componetes/Navigation";
import Container from  "../../componetes/Container";
import Footer from  "../../componetes/Footer"
import React, { useState } from 'react';
import ProductList from '../../componetes/ProductsAdimin/ProductList';
import ProductForm from '../../componetes/ProductsAdimin/ProductForm';
import EditProduct from '../../componetes/ProductsAdimin/editProduct';
import ProductDetail from '../../componetes/ProductsAdimin/ProductDetail'
import axios from 'axios';
import styles from './Adimin.module.css'

function Admin(){   

  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/produtos/${id}`);
      window.location.reload(); 
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  const handleDetail =  (id) => {
    setSelectedProductId(id);
    setEditingProduct(null);

  };

  const handleProductAdded = () => {
    window.location.reload();  
  };

  const handleProductUpdated = () => {
    setSelectedProductId(null);
    setEditingProduct(null);
    window.location.reload(); 
  };

    return(
        <>
        <Header/>
        <Navigation/>
        <Container>

            <div className={styles.admin}>
                <h1>Gerenciamento de Produtos</h1>
                {selectedProductId ? (
                  <ProductDetail productId={selectedProductId} onProductDetail={handleProductUpdated} />
                ) : editingProduct ? (
                  <EditProduct product={editingProduct} onProductUpdated={handleProductUpdated} />
                ) : (
                <ProductForm onProductAdded={handleProductAdded} />
                )}
                <ProductList onEdit={handleEdit} onDelete={handleDelete} onDetail={handleDetail}/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}

export default Admin