import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem(props: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(props.id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={props.imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{props.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(props.price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(props.id)}
            >
              + Add To Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column gap-1">
              <div className="d-flex align-items-center justify-content-center gap-1">
                <Button onClick={() => decreaseCartQuantity(props.id)}>
                  -
                </Button>
                <div>
                  {" "}
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(props.id)}>
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(props.id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
