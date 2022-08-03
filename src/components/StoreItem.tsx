import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Item } from "../data/fetchStoreItems";
import { formatCurrency } from "../utilities/formatCurrency";

export const StoreItem: React.FC<Item> = ({
  id,
  title,
  price,
  description,
  image,
}) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <Card className="p-3 h-100">
        <Card.Img
          variant="top"
          src={image}
          height="200px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
            <span className="fs-3">{title}</span>
            <span className="m-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <Card.Subtitle className="text-truncate">{description}</Card.Subtitle>
        </Card.Body>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3"> {quantity} </span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
