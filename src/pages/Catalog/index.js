import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

import { formatPrice } from '../../utils/format';
import { useHistory } from 'react-router-dom';

function Catalog() {

  const [products, setProducts] = useState([]);
  const history = useHistory();

  const handleGetProducts = async () => {
    try {
      const response = await api.get('/products')

      setProducts(response.data.map(product => {
        return {
          ...product,
          priceFormatted: formatPrice(product.price)
        }
      }))
    } catch (error) {
      alert('Houve um erro ao tentar recuperar os produtos.')
    }
  }

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div className="container">
      <div className="books-list">
        {
          products.map(product => (

            <div className="book-card" key={product.id}>
              <img
                className="book-image"
                src={product.image}
                alt="Capa do livro"
              />
              <div className="book-content">
                <span className="book-name">{product.title}</span>
                <div className="separator" />
                <span className="book-price">{product.priceFormatted}</span>
                <button
                  type="button"
                  className="book-button-add"
                  onClick={() => history.push(`/details/${product.id}`, {product})}
                  >
                  Comprar
                </button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Catalog;