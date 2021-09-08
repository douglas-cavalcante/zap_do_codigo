import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../../utils/format';

import './styles.css';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { updateAmount } from '../../store/modules/cart/cart';


function Cart() {

  const dispatch = useDispatch();

  function increment(item) {
    console.log(item.product.id)
    dispatch(updateAmount(item.product.id, item.quantity + 1))
  }

  function decrement(item) {
    dispatch(updateAmount(item.product.id, item.quantity - 1))
  }

  const cart = useSelector((state) => {
    return {
      total: formatPrice(state.cart.items.reduce((prev, current) => prev + (current.product.price * current.quantity), 0)),
      list: state.cart.items.map(item => {
        return {
          ...item,
          subtotal: formatPrice(item.product.price * item.quantity)
        }
      })
    }
  })

  return (
    <div className="container">
      <div className="content-table-cart">
        <table className="table-cart">
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.list.map(item => (
              <tr key={item.product.id}>
                <td>
                  <img className="table-image" src={item.product.image} alt={item.product.title} />
                </td>
                <td>
                  <strong>{item.product.title}</strong>

                </td>
                <td>
                  <div className="actions"> 
                    <button  className="action-button" type="button" onClick={() => decrement(item)}>
                      <MdRemoveCircleOutline size={20} color="#0B1A72" />
                    </button>
                    <input className="input" type="number" readOnly value={item.quantity} />
                    <button   className="action-button" type="button" onClick={() => increment(item)}>
                      <MdAddCircleOutline size={20} color="#0B1A72" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{item.subtotal}</strong>
                </td>
                <td>
                  <button
                  className="action-button"
                    type="button"
                    onClick={() => { }}
                  >
                    <MdDelete size={20} color="#0B1A72" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>

  )
}

export default Cart;