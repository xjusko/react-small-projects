import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem(props: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === props.id);
  if (item == null) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {props.quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{props.quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.8rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * props.quantity)}</div>
      <Button
        variant="outline-secondary"
        onClick={() => removeFromCart(props.id)}
        size="sm"
      >
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
