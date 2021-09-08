import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Menu = () => {
  let history = useHistory();

  const cartQuantity = useSelector(state => state.cart.items.length);

  const handleRedirect = () => {
    history.push('/cart')
  }

  return (
    <div className="menu-container">
      <div className="menu-content">
        <span className="menu-logo" onClick={() => history.push('/')}>Zap do código</span>
        <span className="menu-cart-count" onClick={handleRedirect}>{cartQuantity} produtos</span>
      </div>
    </div>
  )
}

export default Menu;