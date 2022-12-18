import React from "react";
import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/images/product_01.1.jpg";

import "../../../styles/cart-item.css";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = () => {
  //   const { id, title, price, image01, quantity, totalPrice } = item;

  //   const dispatch = useDispatch();

  //   const incrementItem = () => {
  //     dispatch(
  //       cartActions.addItem({
  //         id,
  //         title,
  //         price,
  //         image01,
  //       })
  //     );
  //   };

  //   const decreaseItem = () => {
  //     dispatch(cartActions.removeItem(id));
  //   };

  //   const deleteItem = () => {
  //     dispatch(cartActions.deleteItem(id));
  //   };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={productImg} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">Burger</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              2x <span>212.00</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn">
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">3</span>
              <span className="decrease__btn">
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn">
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
