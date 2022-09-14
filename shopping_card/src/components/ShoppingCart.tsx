import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isCartOpen: boolean;
};

function ShoppingCart(props: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={props.isCartOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={4}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item}></CartItem>
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingCart;
