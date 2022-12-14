import React from 'react';
import Cart from '../Cart';
import ProductCard from '../ProductCard';
import CloseIcon from '../../media/icons/close.png';
import Title from './Title';

const Modal = ({
  product,
  show,
  title,
  onClose,
  cartItems,
  updateCart,
  modalType,
  isInCart,
}) => {
  if (!show) return null;

  return (
    <div onClick={onClose} className="modal">
      <div onClick={(e) => e.stopPropagation} className="modal__content">
        {title && <Title title={title} classType={'modal'} />}

        <div className="modal__content__body">
          {modalType === 'cart' && (
            <Cart
              isInCart={isInCart}
              updateCart={updateCart}
              cartItems={cartItems}
            />
          )}

          {modalType === 'product' && (
            <ProductCard
              updateCart={updateCart}
              product={product}
              isInCart={isInCart}
            />
          )}
        </div>
        <div onClick={onClose} className="modal__content__close">
          <img src={CloseIcon} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
