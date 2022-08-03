import React from "react";
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { fetchStoreItems } from "../data/fetchStoreItems";

interface CartItemProps {
  id: number;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart, storeItems } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  // if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title} <span className="text-muted"> </span>
        </div>
      </div>
    </Stack>
  );
};
