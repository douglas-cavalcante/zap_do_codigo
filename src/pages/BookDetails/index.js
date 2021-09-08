import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import api from '../../services/api';
import { addProductToCart } from '../../store/modules/cart/cart';
import { formatPrice } from '../../utils/format';

import './styles.css';

const BookDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const location = useLocation()
  console.log(location.state.product)

  const params = useParams();
  const [book, setBook] = useState(null);

  const handleGetBook = async () => {
    const response = await api.get(`/products/${params.id}`)
    setBook({
      ...response.data,
      priceFormatted: formatPrice( response.data.price)
    })
  }

  const handleAddProduct = () => {
    history.push('/cart')
    dispatch(addProductToCart(book))
  }

  useEffect(() => {
    handleGetBook();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">

      {
        book && (
          <div className="book-content-item">
            <div className="left-content">
              <img
                src={book.image}
                alt="capa do produto"
                className="photo-book"
              />
            </div>
            <div className="right-content">
              <h2 className="name-book-item">{book.title}</h2>
              <span className="price-book-item">{book.priceFormatted}</span>
              <span className="description-book-item">
                {book.description}
              </span>
              <button className="book-button-add button-add-book-cart" onClick={handleAddProduct} style={{alignSelf: 'center'}}>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default BookDetails;